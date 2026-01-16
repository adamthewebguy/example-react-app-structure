# src/features/

## Purpose

Encapsulated units of business capability.

## What lives here

- Feature-specific UI
- Domain models and rules
- State management
- Data access contracts

## Why it exists

- Prevents cross-feature coupling
- Makes deletion and refactoring cheap
- Scales without global spaghetti

## Rules

- Features do not import each other directly
- Each feature exposes a public API via index.ts
- Everything inside a feature is allowed to change together

Features are boundaries, not folders.

---

# features/\*/model/

## Purpose

Domain logic and state (React-agnostic).

## What lives here

- Business rules
- Domain types
- Reducers / stores
- Selectors and derived state

## Why it exists

- Domain logic should outlive UI frameworks
- Keeps business rules testable and portable
- Prevents hooks from becoming God objects

## Rules

- No React imports
- No HTTP / SDK imports
- Pure TypeScript where possible

Models decide; they don’t orchestrate.

---

## features/\*/hooks/

### Purpose

Controller / ViewModel layer.

### What lives here

- Custom hooks that orchestrate model + data

### Why it exists

- React is good at orchestration, not business logic
- Keeps UI components thin
- Centralises side-effect complexity

### Rules

- Hooks may import model and data
- Hooks should not contain business rules
- Hooks should return intent-based APIs
- Hooks coordinate; they don’t decide.

---

## features/\*/data/

### Purpose

Data access and anti-corruption layer.

### What lives here

- Repository interfaces
- API / persistence implementations
- Data mapping and normalisation

### Why it exists

- Isolates the app from backend and transport details
- Makes APIs swappable and mockable
- Prevents HTTP from leaking upward

Data is an implementation detail.

---

## features/\*/ui/

### Purpose

Presentation layer (Views).

### What lives here

- React components
- Styling and layout
- User interaction handling

### Why it exists

- Keeps UI replaceable
- Prevents business logic creep
- Encourages composition over inheritance

### Rules

- No HTTP calls
- Minimal state
- Prefer props over imports

UI is disposable.
