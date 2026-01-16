# src/infrastructure/

## Purpose

Internal technical plumbing.

## What lives here

- HTTP clients
- Interceptors
- Auth token providers
- Environment configuration

## Why it exists

- Centralises cross-cutting technical concerns
- Keeps transport and config out of features
- Makes infrastructure boring and predictable

## Rules

- No React
- No feature imports
- No business logic

Infrastructure is necessary, not interesting.
