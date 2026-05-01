/**
 * templates/dashboard.tsx
 * ========================
 * KumoFedi — Admin Dashboard template
 *
 * A full-page layout with sidebar navigation, page header,
 * and a main content area. Copy and customise for any admin app.
 *
 * Usage:
 *   Copy this file into your app and replace the placeholder content
 *   in <main> with your actual page components.
 */

import {
  Sidebar,
  PageHeader,
  Badge,
  Button,
  Text,
  Toasty,
} from "@cloudflare/kumo";

export function DashboardTemplate() {
  return (
    <div className="flex h-screen bg-kumo-canvas">

      {/* ── Sidebar ─────────────────────────────────────────────── */}
      <Sidebar>
        <Sidebar.Header>
          <Text size="lg" weight="semibold" className="text-kumo-default">
            KumoFedi
          </Text>
        </Sidebar.Header>

        <Sidebar.Nav>
          <Sidebar.NavItem href="/" active>Dashboard</Sidebar.NavItem>
          <Sidebar.NavItem href="/resources">Resources</Sidebar.NavItem>
          <Sidebar.NavItem href="/settings">Settings</Sidebar.NavItem>
        </Sidebar.Nav>

        <Sidebar.Footer>
          <Text size="sm" className="text-kumo-muted">v0.1.0</Text>
        </Sidebar.Footer>
      </Sidebar>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-auto">

        <PageHeader
          title="Dashboard"
          description="Welcome to your KumoFedi workspace."
          actions={
            <Button variant="primary" size="sm">New resource</Button>
          }
        />

        <main className="flex-1 p-6 bg-kumo-base">
          {/* Replace this with your page content */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard label="Total items" value="128" trend="up" />
            <StatCard label="Active"      value="94"  trend="up" />
            <StatCard label="Errors"      value="3"   trend="down" status="danger" />
          </div>
        </main>
      </div>

      {/* ── Toast provider (always include once per app) ─────────── */}
      <Toasty />
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────── */

function StatCard({
  label,
  value,
  trend,
  status = "default",
}: {
  label: string;
  value: string;
  trend: "up" | "down";
  status?: "default" | "danger";
}) {
  return (
    <div className="bg-kumo-elevated rounded-lg border border-kumo-line p-4 flex flex-col gap-2">
      <Text size="sm" className="text-kumo-muted">{label}</Text>
      <div className="flex items-center justify-between">
        <Text size="2xl" weight="semibold" className="text-kumo-default">{value}</Text>
        <Badge variant={status === "danger" ? "danger" : "success"}>
          {trend === "up" ? "↑" : "↓"}
        </Badge>
      </div>
    </div>
  );
}
