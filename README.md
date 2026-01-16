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
- Hooks: Orchestrate and coordinate
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

## Folder Structure

```
src/
├── app/ # Application wiring (composition root)
│ ├── App.tsx
│ ├── routes.tsx
│ ├── providers/
│ │ ├── AuthProvider.tsx
│ │ ├── QueryProvider.tsx
│ │ └── AppProviders.tsx
│ │ └── ThemeProvider.tsx
│ └── bootstrap.ts
│
├── pages/ # Route-level composition
│ ├── DashboardPage.tsx
│ ├── LoginPage.tsx
│ └── BillingPage.tsx
│
├── features/ # The actual app
│ ├── auth/
│ │ ├── data/ # Data Access (anti-corruption layer)
│ │ │ ├── auth.api.ts
│ │ │ └── auth.repository.ts
│ │ ├
│ │ ├── model/ # Domain + state
│ │ │ ├── auth.types.ts
│ │ │ ├── auth.store.ts
│ │ │ └── auth.logic.ts # PURE rules (no React) (eg business logic)
│ │ ├
│ │ ├── hooks/ # Controller / ViewModel (React-specific)
│ │ │ └── useAuth.ts # If it needs useEffect, useState.
│ │ │ # or lifecycle awareness
│ │ ├
│ │ ├── ui/ # View (React-specific)
│ │ │ ├── LoginForm.tsx
│ │ │ └── AuthGate.tsx
│ │ ├
│ │ └── index.ts # Public feature API
│ │
│ ├── billing/
│ │ ├── data/ # Data Access (anti-corruption layer)
│ │ │ ├── billing.api.ts
│ │ │ └── billing.repository.ts
│ │ ├── model/ # Domain logic
│ │ │ ├── billing.types.ts
│ │ │ └── billing.logic.ts
│ │ ├── ui/ # View
│ │ │ ├── BillingSummary.tsx
│ │ │ └── UpgradeButton.tsx
│ │ └── index.ts
│
├── infrastructure/ # Internal plumbing
│ ├── http/ # Core transport
│ │ ├── httpClient.ts
│ │ ├── interceptors.ts
│ │ └── types.ts
│ │
│ ├── auth/ # Cross-cutting infra concerns
│ │ └── tokenProvider.ts
│ │
│ └── config/
│ └── env.ts
│
├── integrations/ # Third-party adapters (external services)
│ ├── stripe/
│ │ ├── stripe.client.ts
│ │ └── stripe.adapter.ts
│ │
│ ├── firebase/
│ │ └── firebase.client.ts
│ │
│ └── analytics/
│ ├── analytics.adapter.ts
│ └── providers/
│ ├── posthog.ts
│ └── mixpanel.ts
├── shared/ # Re-usable but non-domain
│ # e.g. Shared components and utilities)
│ ├── ui/
│ │ └── Button.tsx
│ ├── hooks/
│ │ └── useAsync.ts
│ └── utils/
│ └── money.ts
│
└── index.tsx
```
