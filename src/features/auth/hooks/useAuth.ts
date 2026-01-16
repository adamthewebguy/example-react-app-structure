import { useMemo, useState } from "react";

import type { AuthCredentials, AuthSession } from "../model/auth.types";
import { validateCredentials } from "../model/auth.logic";
import { authRepository } from "../data/auth.repository";
import { authStore } from "../model/auth.store";

export interface UseAuthResult {
  session: AuthSession | null;
  status: "anonymous" | "authenticated" | "loading";
  error: string | null;
  login(credentials: AuthCredentials): Promise<void>;
  logout(): void;
}

/**
 * Controller/ViewModel hook for auth (React-specific).
 *
 * If it needs lifecycle awareness, it belongs here.
 */
export function useAuth(): UseAuthResult {
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState(authStore.getState().status);
  const [session, setSession] = useState<AuthSession | null>(
    authStore.getState().session,
  );

  return useMemo(
    () => ({
      session,
      status,
      error,
      async login(credentials: AuthCredentials) {
        const errors = validateCredentials(credentials);
        if (errors.length) {
          setError(errors[0] ?? "Invalid credentials.");
          return;
        }

        setError(null);
        setStatus("loading");
        const nextSession = await authRepository.login(credentials);
        authStore.setSession(nextSession);
        setSession(nextSession);
        setStatus("authenticated");
      },
      logout() {
        authStore.setSession(null);
        setSession(null);
        setStatus("anonymous");
      },
    }),
    [error, session, status],
  );
}

