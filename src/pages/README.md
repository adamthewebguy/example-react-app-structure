# src/pages/

## Purpose

Route-level composition.

## What lives here

- One file per route
- Glue code that composes features together
- High-level layout decisions

## Why it exists

- Routes are not features
- Pages are where multiple features meet
- Keeps routing concerns out of features

## Rules

- No domain logic
- No HTTP calls
- Prefer composition over implementation

Pages orchestrate features; they do not own behaviour.
