# src/integrations/

## Purpose

Adapters to third-party systems.

## What lives here

- Stripe, Firebase, Analytics, etc.
- SDK setup and vendor-specific code
- Provider implementations

## Why it exists

- Third-party APIs change
- SDKs leak abstractions
- Vendors should not define your architecture

## Rules

- No feature logic
- Expose narrow, capability-based APIs
- Never imported directly by UI

Third-party code is radioactive — isolate it.
