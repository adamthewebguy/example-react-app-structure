import type { AuthCredentials } from "./auth.types";

/**
 * PURE auth rules (no React).
 *
 * Put validation, mapping, and domain-level decisions here.
 */
export function validateCredentials(credentials: AuthCredentials): string[] {
  const errors: string[] = [];
  if (!credentials.email.trim()) errors.push("Email is required.");
  if (!credentials.password.trim()) errors.push("Password is required.");
  return errors;
}

