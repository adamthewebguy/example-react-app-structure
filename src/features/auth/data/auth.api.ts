import { httpClient } from "../../../infrastructure/http/httpClient";
import type { AuthCredentials, AuthSession } from "../model/auth.types";

/**
 * Low-level API calls for auth.
 *
 * This should be transport-shaped (HTTP semantics), not domain-shaped.
 */
export async function postLogin(
  credentials: AuthCredentials,
): Promise<AuthSession> {
  return httpClient.post<AuthSession>("/auth/login", credentials);
}

