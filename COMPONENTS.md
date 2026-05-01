# KumoFedi — Agent Component Manifest
# =====================================
# This file is the single source of truth for AI agents building
# prototypes with the KumoFedi design system.
#
# READ THIS FILE FIRST before writing any component code.
# It tells you: what exists, how to import it, and how to theme it.

## Design System Identity

- **Name**: KumoFedi
- **Base library**: `@cloudflare/kumo` (React + Tailwind CSS v4)
- **Theme token**: `data-theme="kumofedi"` on `<html>` or parent
- **Mode token**: `data-mode="light"` or `data-mode="dark"` on `<html>`
- **Theme file**: `theme/kumofedi.css` (import after Kumo styles)
- **Author**: Federica Bonfanti

---

## Setup (copy this into every new app)

```css
/* app.css */
@source "../node_modules/@cloudflare/kumo/dist/**/*.{js,jsx,ts,tsx}";
@import "@cloudflare/kumo/styles/tailwind";
@import "tailwindcss";
@import "../../theme/kumofedi.css"; /* adjust path as needed */
```

```html
<!-- index.html -->
<html data-theme="kumofedi" data-mode="light">
```

```tsx
// main.tsx
import "./app.css";
import { Button } from "@cloudflare/kumo";
```

---

## KumoFedi Colour Palette

| Token class              | Role                         | Light value    |
|--------------------------|------------------------------|----------------|
| `bg-kumo-canvas`         | outermost page background    | `#f4f0ea`      |
| `bg-kumo-base`           | main content background      | `#faf8f5`      |
| `bg-kumo-elevated`       | cards, modals, popovers      | `#ffffff`      |
| `bg-kumo-recessed`       | inputs, wells, sidebars      | `#f0ece6`      |
| `bg-kumo-brand`          | primary CTA background       | `#c0524a`      |
| `bg-kumo-brand-tint`     | subtle brand highlight       | `#fdf0ef`      |
| `text-kumo-default`      | primary text                 | `#1c1a18`      |
| `text-kumo-muted`        | secondary / captions         | `#6b6258`      |
| `text-kumo-subtle`       | placeholders, disabled       | `#a89e94`      |
| `text-kumo-brand`        | brand-coloured text          | `#c0524a`      |
| `border-kumo-line`       | dividers, card borders       | `#ddd8d2`      |
| `ring-kumo-ring`         | focus rings                  | `#c0524a`      |

**Rules**:
- ALWAYS use semantic tokens (`bg-kumo-*`, `text-kumo-*`) — never raw Tailwind (`bg-red-500`)
- NEVER use `dark:` variants — dark mode is automatic via `data-mode="dark"`
- Surface order: `bg-kumo-canvas` → `bg-kumo-base` → `bg-kumo-elevated` → `bg-kumo-recessed`

---

## Available Kumo Components

Full machine-readable registry: `npx @cloudflare/kumo docs`
Online registry: `https://kumo-ui.com/registry/`

### Quick reference — most-used components

**Layout**
- `Grid` — responsive CSS grid with preset columns
- `Sidebar` — collapsible side navigation

**Forms**
- `Button` — variants: `primary`, `secondary`, `ghost`, `danger`; sizes: `sm`, `md`, `lg`
- `Input` — text input with label and error support
- `InputArea` — textarea
- `Select` — dropdown select
- `Checkbox` — single or grouped
- `Switch` — toggle switch
- `Combobox` — autocomplete with filterable dropdown

**Feedback**
- `Banner` — full-width info/warning/danger bar
- `Badge` — inline status indicator
- `Toast` / `Toasty` — notification toasts (bottom-right, stackable)
- `Loader` — spinner

**Navigation**
- `Tabs` — segmented or underline tab navigation
- `Breadcrumbs` — path breadcrumbs
- `MenuBar` — top navigation bar
- `Pagination` — page controls

**Overlay**
- `Dialog` — modal dialog
- `Popover` — anchored popover
- `Tooltip` — hover tooltip
- `DropdownMenu` — context/action menus

**Display**
- `Text` — typography component (`size`, `weight`, `truncate`)
- `Table` — full-featured data table with selection
- `Meter` — progress bar / meter
- `Empty` — empty state placeholder
- `Skeleton Line` — loading skeleton

**Blocks (composite)**
- `PageHeader` — page title + actions header
- `ResourceList` — list of resources with actions
- `DeleteResource` — confirmation delete pattern

---

## Importing Components

```tsx
// Barrel import (fine for prototypes)
import { Button, Input, Dialog, Badge, Toasty } from "@cloudflare/kumo";

// Granular import (better tree-shaking in production)
import { Button } from "@cloudflare/kumo/button";
```

---

## Templates Available in This Repo

| File                              | Description                        |
|-----------------------------------|------------------------------------|
| `templates/dashboard.tsx`         | Admin dashboard with sidebar       |
| `templates/settings-page.tsx`     | Settings form page                 |
| `templates/resource-list.tsx`     | List view with search and filters  |

---

## Agent Quick-Start Recipe

To build a new prototype:

1. Copy `examples/hello-kumofedi/` as your starting point
2. Add `data-theme="kumofedi"` to `<html>` in `index.html`
3. Import components from `@cloudflare/kumo`
4. Use only `bg-kumo-*`, `text-kumo-*`, `border-kumo-*` classes
5. Check this file for the right component name before inventing one

---

## Getting More Component Docs

```bash
# List all components
npx @cloudflare/kumo ls

# Docs for a specific component
npx @cloudflare/kumo doc Button

# Full docs dump (pipe to a file for agent reading)
npx @cloudflare/kumo docs > kumo-full-docs.md
```
