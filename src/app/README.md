# src/app/

## Purpose

Application bootstrap and composition root.

## What lives here

- Global providers (Auth, Query, Theme, etc.)
- Route definitions
- App-level configuration
- Startup wiring

## Why it exists

- Keeps “how the app is assembled” separate from “what the app does”
- Prevents providers and routing logic from leaking into features
- Gives you one place to understand app startup

## Rules

- No business logic
- No data fetching
- No feature-specific code

If you deleted all features, this folder would still make sense.
