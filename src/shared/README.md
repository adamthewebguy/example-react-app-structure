# src/shared/

## Purpose

Reusable, non-domain-specific code.

## What lives here

- Design system components
- Generic hooks (e.g. useAsync, useDebounce, useFetch, useMutation, useQuery, useScroll, useTheme, useTranslation, useUser, useViewport, etc. See https://usehooks.com and https://react-hooks-library.vercel.app/getting-started for inspiration!)
- Utilities and helpers

## Why it exists

- Avoids duplication without coupling domains
- Keeps features focused on business meaning

## Rules

- No feature imports
- No business semantics
- If it knows about “users” or “billing”, it doesn’t belong here

Shared code should be boring.
