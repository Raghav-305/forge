-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create performance indexes
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_app_data_payload_gin 
ON "AppData" USING GIN (payload);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_app_data_search 
ON "AppData" USING GIN (to_tsvector('english', payload::text));

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_log_data_gin 
ON "EventLog" USING GIN (data);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_app_config_config_gin 
ON "AppConfig" USING GIN (config);

-- Create function for automatic updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers
DROP TRIGGER IF EXISTS update_app_config_updated_at ON "AppConfig";
CREATE TRIGGER update_app_config_updated_at 
    BEFORE UPDATE ON "AppConfig" 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_app_data_updated_at ON "AppData";
CREATE TRIGGER update_app_data_updated_at 
    BEFORE UPDATE ON "AppData" 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create function for search optimization
CREATE OR REPLACE FUNCTION search_app_data(search_query TEXT)
RETURNS SETOF "AppData" AS $$
BEGIN
    RETURN QUERY
    SELECT *
    FROM "AppData"
    WHERE payload::text ILIKE '%' || search_query || '%'
       OR to_tsvector('english', payload::text) @@ plainto_tsquery('english', search_query)
    ORDER BY 
        ts_rank(to_tsvector('english', payload::text), plainto_tsquery('english', search_query)) DESC,
        created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- Create function for cleanup old logs
CREATE OR REPLACE FUNCTION cleanup_old_logs(days_to_keep INTEGER)
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM "EventLog"
    WHERE created_at < NOW() - (days_to_keep || ' days')::INTERVAL;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Create view for dashboard stats
CREATE OR REPLACE VIEW dashboard_stats AS
SELECT 
    COUNT(DISTINCT a.config_slug) as total_apps,
    COUNT(DISTINCT a.entity_slug) as total_entities,
    COUNT(DISTINCT u.id) as total_users,
    COUNT(e.id) as total_events_24h,
    AVG((a.payload->>'value')::numeric) as avg_record_value
FROM "AppData" a
CROSS JOIN "User" u
LEFT JOIN "EventLog" e ON e.created_at > NOW() - INTERVAL '24 hours'
WHERE a.created_at > NOW() - INTERVAL '30 days';
