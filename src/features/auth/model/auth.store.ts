import type { AuthState, AuthSession } from "./auth.types";

let state: AuthState = {
  status: "anonymous",
  session: null,
};

export interface AuthStore {
  getState(): AuthState;
  setSession(session: AuthSession | null): void;
}

/**
 * Minimal store stub.
 *
 * Replace with your preferred state solution (Redux, Zustand, Jotai, etc).
 */
export const authStore: AuthStore = {
  getState() {
    return state;
  },
  setSession(session) {
    state = {
      status: session ? "authenticated" : "anonymous",
      session,
    };
  },
};

