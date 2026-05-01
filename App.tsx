/**
 * Hello KumoFedi
 * ==============
 * A simple app that shows the KumoFedi theme in action.
 * Every component here is from @cloudflare/kumo, styled with
 * KumoFedi's colour tokens automatically.
 */

import { useState } from "react";
import {
  Button,
  Badge,
  Banner,
  Input,
  Switch,
  Tabs,
  Text,
  Toasty,
  toast,
} from "@cloudflare/kumo";

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");

  function toggleMode() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute("data-mode", next ? "dark" : "light");
  }

  function handleSubmit() {
    toast.success(`Hello, ${name || "world"}! 👋`);
  }

  return (
    <div className="min-h-screen bg-kumo-canvas p-8 flex flex-col gap-8 max-w-2xl mx-auto">

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <Text size="2xl" weight="semibold" className="text-kumo-default">
            Hello KumoFedi
          </Text>
          <Text size="sm" className="text-kumo-muted">
            Kumo UI + KumoFedi theme
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Text size="sm" className="text-kumo-muted">Dark mode</Text>
          <Switch checked={darkMode} onCheckedChange={toggleMode} />
        </div>
      </div>

      {/* ── Banner ─────────────────────────────────────────────── */}
      <Banner
        variant="info"
        title="You're using the KumoFedi theme"
        description="All colours, fonts and tokens are customised from Kumo's defaults."
      />

      {/* ── Badges ─────────────────────────────────────────────── */}
      <div>
        <Text size="sm" weight="medium" className="text-kumo-muted mb-2">Status badges</Text>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="danger">Error</Badge>
          <Badge variant="secondary">Inactive</Badge>
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────────────────── */}
      <Tabs defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="details">Details</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">
          <div className="bg-kumo-elevated border border-kumo-line rounded-lg p-4 mt-3">
            <Text size="sm" className="text-kumo-muted">
              This is the overview tab. Replace with your content.
            </Text>
          </div>
        </Tabs.Content>
        <Tabs.Content value="details">
          <div className="bg-kumo-elevated border border-kumo-line rounded-lg p-4 mt-3">
            <Text size="sm" className="text-kumo-muted">Details tab content.</Text>
          </div>
        </Tabs.Content>
        <Tabs.Content value="settings">
          <div className="bg-kumo-elevated border border-kumo-line rounded-lg p-4 mt-3">
            <Text size="sm" className="text-kumo-muted">Settings tab content.</Text>
          </div>
        </Tabs.Content>
      </Tabs>

      {/* ── Form ───────────────────────────────────────────────── */}
      <div className="bg-kumo-elevated border border-kumo-line rounded-lg p-6 flex flex-col gap-4">
        <Text size="base" weight="semibold" className="text-kumo-default">
          Say hello
        </Text>
        <Input
          label="Your name"
          placeholder="e.g. Federica"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex gap-2">
          <Button variant="primary" onClick={handleSubmit}>
            Send greeting
          </Button>
          <Button variant="secondary" onClick={() => setName("")}>
            Clear
          </Button>
        </div>
      </div>

      {/* ── Colour swatches ────────────────────────────────────── */}
      <div>
        <Text size="sm" weight="medium" className="text-kumo-muted mb-3">
          KumoFedi colour tokens
        </Text>
        <div className="grid grid-cols-4 gap-2">
          {[
            { token: "bg-kumo-brand",    label: "brand"    },
            { token: "bg-kumo-base",     label: "base"     },
            { token: "bg-kumo-elevated", label: "elevated" },
            { token: "bg-kumo-recessed", label: "recessed" },
            { token: "bg-kumo-success",  label: "success"  },
            { token: "bg-kumo-warning",  label: "warning"  },
            { token: "bg-kumo-danger",   label: "danger"   },
            { token: "bg-kumo-info",     label: "info"     },
          ].map(({ token, label }) => (
            <div key={token} className="flex flex-col gap-1 items-center">
              <div className={`w-full h-10 rounded border border-kumo-line ${token}`} />
              <Text size="xs" className="text-kumo-muted">{label}</Text>
            </div>
          ))}
        </div>
      </div>

      {/* Toast provider */}
      <Toasty />
    </div>
  );
}
