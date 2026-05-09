export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3001').replace(/\/+$/, '');
const DEFAULT_TIMEOUT_MS = 30000;

export function getAuthHeaders(): Record<string, string> {
  const token = typeof window !== 'undefined' ? window.localStorage.getItem('token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      throw new Error('Request timed out. The backend did not respond in time.');
    }
    if (error instanceof TypeError) {
      throw new Error(
        `Could not reach the backend at ${API_BASE_URL}. If the browser console mentions CORS, add this frontend origin to FRONTEND_URL on Render and redeploy.`
      );
    }
    throw error;
  } finally {
    clearTimeout(id);
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : ({} as T);
  } catch {
    throw new Error(`Invalid JSON response from ${response.url}`);
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${API_BASE_URL}${normalizedPath}`;
  
  try {
    const response = await fetchWithTimeout(url, {
      headers: {
        ...getAuthHeaders()
      }
    });

    if (!response.ok) {
      const errorBody = await handleResponse<{ error?: string }>(response);
      throw new Error(errorBody.error || `Request failed with status ${response.status}`);
    }

    const data = await handleResponse<T>(response);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function apiPost<T>(path: string, body: any): Promise<T> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${API_BASE_URL}${normalizedPath}`;
  
  try {
    const response = await fetchWithTimeout(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders()
    },
    body: JSON.stringify(body)
  });

    if (!response.ok) {
      const errorBody = await handleResponse<{ error?: string }>(response);
      const errorMsg = errorBody.error || `Request failed with status ${response.status}`;
      throw new Error(errorMsg);
    }

    const data = await handleResponse<T>(response);
    return data;
  } catch (error) {
    throw error;
  }
}
