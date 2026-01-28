# Frontend Architecture – One‑Page Guide

This document captures the **mental models, rules, and guardrails** for the frontend architecture we discussed. It is intentionally concise and opinionated.

---

## Core Mental Models

### 1. Think in **layers**, not folders

Folders are just a reflection of intent. What matters is _responsibility_.

Each feature is layered internally:

- **model** → pure domain rules & types
- **data** → data access / anti‑corruption
- **hooks** → controller / view‑model (React‑specific)
- **ui** → render‑only domain UI

---

### 2. Dependencies only flow **downwards**

```
ui → hooks → model
ui → hooks → data → infrastructure / integrations
```

Never sideways. Never upwards.

---

### 3. Screens compose, features own meaning

- Pages/screens **arrange** features
- Features **own domain concepts**
- Shared UI owns _no_ domain knowledge

If a component understands what a “Goal”, “Billing Plan”, or “Auth State” is — it belongs to a **feature**.

---

## Folder Responsibilities (Rules)

### `features/*/model`

**Purpose:** Domain logic

- Pure functions only
- No React, no HTTP, no storage
- Easy to unit test

Good names:

- `*.rules.ts`
- `*.calculations.ts`

Avoid:

- `store`
- `logic` (too vague unless very disciplined)

---

### `features/*/data`

**Purpose:** Anti‑corruption layer

- Repositories expose domain‑friendly APIs
- Maps external DTOs → internal models
- No React, no JSX

Features depend on repositories, never directly on APIs or SDKs.

---

### `features/*/hooks`

**Purpose:** Controller / View‑Model

- Orchestrates state, effects, data access
- May call model + repository
- This is where React lives

Rule of thumb:

> If it needs `useState`, `useEffect`, or lifecycle awareness — it belongs here.

---

### `features/*/ui`

**Purpose:** Domain‑aware rendering

- Receives data via props
- No fetching, no side effects
- Can compose shared UI primitives

UI understands _what_ it’s rendering, not _why_ or _how_ the data exists.

---

### `infrastructure/`

**Purpose:** Internal plumbing

- HTTP client
- Auth token handling
- Config / env

No feature logic here.

---

### `integrations/`

**Purpose:** Third‑party adapters

- Stripe, Firebase, Analytics, etc
- Wrap SDKs
- Adapt external concepts to your app

Features should never import SDKs directly.

---

### `shared/`

**Purpose:** Generic reuse

Allowed:

- UI primitives (Button, Card)
- Generic hooks (useAsync)
- Math/date helpers

Rule:

> If it understands a domain concept, it is _not_ shared.

---

## Feature Public API

Each feature exposes a **controlled surface** via `index.ts`.

Only export:

- hooks intended for use
- UI components intended for composition

Never export internals accidentally.

---

## Final Guiding Principle

> **Structure the code so that doing the wrong thing feels uncomfortable.**

This architecture doesn’t rely on discipline alone — it encodes intent into the filesystem.
