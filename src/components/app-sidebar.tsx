import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Upload, FileSpreadsheet, ScrollText, Boxes, Sparkles } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader,
} from "@/components/ui/sidebar";
import { useEngineApps } from "@/hooks/use-engine-data";

const nav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Upload Config", url: "/upload", icon: Upload },
  { title: "CSV Import", url: "/csv-import", icon: FileSpreadsheet },
  { title: "Logs", url: "/logs", icon: ScrollText },
];

export function AppSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { data: apps } = useEngineApps();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-[oklch(0.55_0.22_268)] glow-border">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Forge</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Engine v2.4</p>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={path === item.url}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Apps</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {(apps ?? []).map((a) => {
                const appRouteId = a.slug ?? a.id;

                return (
                  <SidebarMenuItem key={a.id}>
                    <SidebarMenuButton asChild isActive={path === `/app/${appRouteId}`}>
                      <Link to="/app/$id" params={{ id: appRouteId }}>
                        <Boxes className="h-4 w-4" />
                        <span>{a.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
