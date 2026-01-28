# Common Failure Modes (and How This Prevents Them)

## 1. Business logic creeping into JSX

**Symptom:**

- `if (score < 90)` inside components

**Prevention:**

- Pure rules live in `model/`
- UI only renders results

---

## 2. HTTP / SDK usage scattered everywhere

**Symptom:**

- `fetch()` or `stripe.*` calls inside components

**Prevention:**

- API → repository → hook chain
- Features depend on repositories only

---

## 3. "God hooks" that do everything

**Symptom:**

- Massive hooks with UI decisions, math, fetching

**Prevention:**

- Hooks orchestrate
- Model calculates
- UI renders

---

## 4. Shared components becoming secretly domain‑specific

**Symptom:**

- `shared/ui/GoalCard.tsx`

**Prevention:**

- Domain UI lives in `features/*/ui`
- Shared UI must be domain‑agnostic

---

## 5. Auth leaking everywhere

**Symptom:**

- Every feature knows about tokens and user shape

**Prevention:**

- Auth isolated in its feature
- Access via hooks or gates

---

## 6. Features tightly coupled to each other

**Symptom:**

- `features/goals` importing `features/billing/model`

**Prevention:**

- Features communicate only via screens or explicit APIs

---

## Final Guiding Principle

> **Structure the code so that doing the wrong thing feels uncomfortable.**

This architecture doesn’t rely on discipline alone — it encodes intent into the filesystem.
