# Example App Structure

## Mental model / Full-layered architecture

- Dependencies only flow downwards
- Lower layers never import higher layers
- External systems never define internal shape

Architecture is enforced by import direction.

```
┌────────────────────────────┐
│            UI              │  ← React components (views)
└────────────▲───────────────┘
             │
┌────────────┴───────────────┐
│           Hooks            │  ← Controllers / ViewModels
└────────────▲───────────────┘
             │
┌────────────┴───────────────┐
│           Model            │  ← Domain + state + rules
└────────────▲───────────────┘
             │
┌────────────┴───────────────┐
│            Data            │  ← Anti-corruption layer
└────────────▲───────────────┘
             │
┌────────────┴───────────────┐
│       Infrastructure       │  ← Internal plumbing
└────────────▲───────────────┘
             │
┌────────────┴───────────────┐
│        Integrations        │  ← External systems
└────────────────────────────┘
```

## Responsibility boundaries

- UI: Render and capture intent
- Hooks: Orchestrate and coordinate (also see https://usehooks.com and https://react-hooks-library.vercel.app/getting-started for inspiration!)
- Model: Decide and enforce rules
- Data: Translate and isolate
- Infrastructure: Transport and config
- Integrations: Talk to vendors

## The guiding test

When you’re unsure where something belongs, ask:

- Does this decide anything? -> Model
- Does this coordinate lifecycle or async work? -> Hook
- Does this talk to the outside world? -> Data / Integration
- Would this survive a framework change? -> Not UI
- Would this change if Stripe changes? -> Integration

## Final Guiding Principle

> **Structure the code so that doing the wrong thing feels uncomfortable.**

This architecture doesn’t rely on discipline alone — it encodes intent into the filesystem.

## Folder Structure

```
src/
├── app/                             # Application wiring (composition root)
│ ├── App.tsx
│ ├── routes.tsx
│ ├── providers/                     # Global provider. NOT features! These wrap the entire app; every page can use them.
│ │ ├── AuthProvider.tsx
│ │ ├── QueryProvider.tsx
│ │ └── AppProviders.tsx
│ │ └── ThemeProvider.tsx
│ └── bootstrap.ts
│
├── pages/                           # Route-level composition. Should be boring (all the interesting stuff should be in features/). Pages orchestrate features; they do not own behaviour.
│ |                                  # If routes.tsx controls routing, then pages/ should never import infra, repositories, or providers. It should only compose features + layout
│ ├── DashboardPage.tsx
│ ├── LoginPage.tsx
│ └── BillingPage.tsx
│
├── features/                        # The actual app!
│ ├── auth/
│ │ ├── data/                        # Data Access (anti-corruption layer)
│ │ │ ├── auth.api.ts                # Low-level API calls; "speaks backend" (HTTP semantics; code doesn't use this)
│ │ │ └── auth.repository.ts         # High-level repository interface; "speaks domain" (code uses this)
│ │ │
│ │ ├── context/
│ │ │ ├── AuthContext.tsx            # Optional, usually best in AuthProvider.tsx (if needed at all!). Best when multiple features (providers!) need/share it, and/or very large/complex features
│ │ │ └── AuthProvider.tsx           # Optional, wraps hook & exposes context (this is the most common pattern). Providers are structure; context is plumbing — don’t expose plumbing unless you must!
│ │ │
│ │ ├── model/                       # Domain + state (but framework-agnostic..)
│ │ │ ├── auth.types.ts
│ │ │ ├── auth.store.ts              # BEWARE: If contains React state or subscriptions, it does not belong in model! Try hooks..
│ │ │ └── auth.rules.ts              # Pure rules (no React) (eg business logic)
│ │ │
│ │ ├── hooks/                       # Controller / ViewModel (React-specific)
│ │ │ └── useAuth.ts                 # If it needs useEffect, useState, or lifecycle awareness. "Speaks React (React-specific)
│ │ │ └── auth.store.ts              # If "store" uses React state, subscriptions, Zustand, jotai etc.
│ │ │
│ │ ├── ui/                          # View (React-specific). "Speaks pixels"
│ │ │ ├── LoginForm.tsx
│ │ │ └── AuthGate.tsx
│ │ │
│ │ └── index.ts                     # Public feature API. Only export what _outside the feature_ is allowed to use
│ │
│ ├── billing/
│ │ ├── data/
│ │ │ ├── billing.api.ts
│ │ │ └── billing.repository.ts
│ │ │
│ │ ├── context/
│ │ │ ├── BillingContext.tsx       # Optional, could be in BillingProvider.tsx, or not at all!
│ │ │ └── BillingProvider.tsx      # Optional, wraps hook & exposes context (this is the most common pattern)
│ │ │
│ │ ├── hooks/                       # Controller / ViewModel (React-specific)
│ │ │ └── useBilling.ts             # Actual logic, used inside BillingProvider & elsewhere
│ │ │
│ │ ├── model/
│ │ │ ├── billing.types.ts
│ │ │ └── billing.logic.ts
│ │ │
│ │ ├── ui/
│ │ │ ├── BillingSummary.tsx
│ │ │ └── UpgradeButton.tsx
│ │ └── index.ts
│
├── infrastructure/                  # Internal plumbing
│ ├── http/                          # Core transport
│ │ ├── httpClient.ts
│ │ ├── interceptors.ts
│ │ └── types.ts
│ │
│ ├── auth/                          # Cross-cutting infra concerns.
│ │ └── tokenProvider.ts
│ │
│ └── config/
│ └── env.ts
│
├── integrations/                    # Third-party adapters (external services).
│ ├── stripe/
│ │ ├── stripe.client.ts             # SDK wrapper. Make sure features never import .client.ts directly — only adapters or repositories should.
│ │ └── stripe.adapter.ts            # maps Stripe (SDK) to domain (types)
│ │
│ ├── firebase/
│ │ └── firebase.client.ts
│ │
│ └── analytics/
│ ├── analytics.adapter.ts
│ └── providers/
│ ├── posthog.ts
│ └── mixpanel.ts
│
├── shared/                          # Re-usable but non-domain (e.g. Shared components and utilities). If it understands a domain concept, it is not shared.
│ ├── ui/
│ │ └── Button.tsx
│ ├── hooks/
│ │ └── useAsync.ts
│ └── utils/
│ └── money.ts
│
└── index.tsx
```
