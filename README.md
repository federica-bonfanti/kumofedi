# KumoFedi

A design system layer on top of [Kumo UI](https://kumo-ui.com) by Cloudflare.

**KumoFedi** customises Kumo's colour tokens and typography into a warm, editorial palette — and packages templates and an agent manifest so AI agents can build prototypes fast.

---

## What's in this repo

```
kumofedi/
├── theme/
│   └── kumofedi.css       ← colour + font overrides (data-theme="kumofedi")
├── templates/
│   ├── dashboard.tsx      ← admin dashboard with sidebar
│   ├── settings-page.tsx  ← settings form
│   └── resource-list.tsx  ← filterable resource table
├── examples/
│   └── hello-kumofedi/    ← runnable Vite app showcasing the theme
├── COMPONENTS.md          ← agent manifest: components, tokens, patterns
└── README.md
```

---

## Quickstart

### Run the example app

```bash
cd examples/hello-kumofedi
npm install
npm run dev
```

Open `http://localhost:5173`

### Use KumoFedi in your own app

**1. Install Kumo**
```bash
npm install @cloudflare/kumo
```

**2. Add the theme to your CSS**
```css
/* app.css */
@source "../node_modules/@cloudflare/kumo/dist/**/*.{js,jsx,ts,tsx}";
@import "@cloudflare/kumo/styles/tailwind";
@import "tailwindcss";
@import "./path/to/kumofedi/theme/kumofedi.css";
```

**3. Activate the theme on your HTML root**
```html
<html data-theme="kumofedi" data-mode="light">
```

**4. Import and use Kumo components**
```tsx
import { Button, Badge, Input } from "@cloudflare/kumo";

export function MyPage() {
  return (
    <div className="bg-kumo-base p-6">
      <Badge variant="success">Active</Badge>
      <Input label="Name" placeholder="Your name" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

---

## Colour palette

| Token                   | Role                    |
|-------------------------|-------------------------|
| `bg-kumo-brand`         | Primary action / CTA    |
| `bg-kumo-base`          | Main page background    |
| `bg-kumo-elevated`      | Cards, modals           |
| `bg-kumo-recessed`      | Inputs, wells           |
| `text-kumo-default`     | Primary text            |
| `text-kumo-muted`       | Secondary / captions    |
| `border-kumo-line`      | Dividers, card borders  |

Full token list: see [`COMPONENTS.md`](./COMPONENTS.md)

---

## For AI agents

Read [`COMPONENTS.md`](./COMPONENTS.md) first — it's your complete guide to:
- What components are available
- How to import them
- Which colour tokens to use
- Template files to copy

```bash
# Get live Kumo component docs
npx @cloudflare/kumo docs
```

---

## Stack

- [Kumo UI](https://kumo-ui.com) — `@cloudflare/kumo`
- React 19
- Tailwind CSS v4
- Vite 6
- DM Sans + DM Mono fonts
