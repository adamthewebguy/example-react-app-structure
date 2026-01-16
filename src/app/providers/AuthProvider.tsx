import React from "react";

export interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * Auth context/provider boundary.
 *
 * In a real app this would wrap an auth store (e.g. Zustand), subscribe to token
 * refresh, and expose auth state.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  return <>{children}</>;
}

