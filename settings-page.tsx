/**
 * templates/settings-page.tsx
 * ============================
 * KumoFedi — Settings Page template
 *
 * A standard settings form with sections, inputs, and save/cancel actions.
 * Built with Kumo's Field, Input, Switch, Select, and Button components.
 */

import {
  PageHeader,
  Button,
  Input,
  Switch,
  Select,
  Text,
  Banner,
} from "@cloudflare/kumo";
import { useState } from "react";

export function SettingsPageTemplate() {
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState(true);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="min-h-screen bg-kumo-base">
      <PageHeader
        title="Settings"
        description="Manage your workspace preferences."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Cancel</Button>
            <Button variant="primary" size="sm" onClick={handleSave}>Save changes</Button>
          </div>
        }
      />

      <main className="max-w-2xl mx-auto px-6 py-8 flex flex-col gap-8">

        {saved && (
          <Banner variant="success" title="Settings saved" />
        )}

        {/* ── Section: Profile ──────────────────────────────────── */}
        <Section title="Profile" description="Your personal information.">
          <Input label="Display name" placeholder="Federica Bonfanti" />
          <Input label="Email" type="email" placeholder="you@example.com" />
        </Section>

        {/* ── Section: Preferences ─────────────────────────────── */}
        <Section title="Preferences" description="Adjust how the app behaves.">
          <Select label="Language" defaultValue="en">
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="es">Español</Select.Option>
            <Select.Option value="it">Italiano</Select.Option>
          </Select>

          <div className="flex items-center justify-between py-2">
            <div>
              <Text size="sm" weight="medium" className="text-kumo-default">
                Email notifications
              </Text>
              <Text size="sm" className="text-kumo-muted">
                Receive updates about your resources.
              </Text>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
        </Section>

        {/* ── Section: Danger zone ─────────────────────────────── */}
        <Section title="Danger zone" description="Irreversible actions.">
          <div className="flex items-center justify-between py-2 border border-kumo-danger rounded-lg px-4">
            <div>
              <Text size="sm" weight="medium" className="text-kumo-default">
                Delete account
              </Text>
              <Text size="sm" className="text-kumo-muted">
                This cannot be undone.
              </Text>
            </div>
            <Button variant="danger" size="sm">Delete</Button>
          </div>
        </Section>

      </main>
    </div>
  );
}

/* ── Section wrapper ───────────────────────────────────────────────── */
function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="border-b border-kumo-line pb-3">
        <Text size="base" weight="semibold" className="text-kumo-default">{title}</Text>
        <Text size="sm" className="text-kumo-muted">{description}</Text>
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}
