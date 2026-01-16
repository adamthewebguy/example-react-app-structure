import React from "react";

export interface QueryProviderProps {
  children: React.ReactNode;
}

/**
 * Data-fetching provider boundary.
 *
 * Typically this would configure React Query / TanStack Query, SWR, etc.
 */
export function QueryProvider({ children }: QueryProviderProps) {
  return <>{children}</>;
}

