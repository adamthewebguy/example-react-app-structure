# src/shared/

## Purpose

Reusable, non-domain-specific code.

## What lives here

- Design system components
- Generic hooks
- Utilities and helpers

## Why it exists

- Avoids duplication without coupling domains
- Keeps features focused on business meaning

## Rules

- No feature imports
- No business semantics
- If it knows about “users” or “billing”, it doesn’t belong here

Shared code should be boring.
