# src/infrastructure/

## Purpose

Internal technical plumbing.

Features don’t know about users, tokens, or sessions.
They talk to an HTTP client that already “knows who you are”.

## What lives here

- HTTP clients
- Interceptors
- Auth token providers
- Environment configuration

## Why it exists

Features don’t know about users, tokens, or sessions.
They talk to an HTTP client that already “knows who you are”.

- Centralises cross-cutting technical concerns
- Keeps transport and config out of features
- Makes infrastructure boring and predictable

## Rules

- No React
- No feature imports
- No business logic

Infrastructure is necessary, not interesting.
