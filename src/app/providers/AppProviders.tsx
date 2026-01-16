import React from "react";

import { AuthProvider } from "./AuthProvider";
import { QueryProvider } from "./QueryProvider";
import { ThemeProvider } from "./ThemeProvider";

export interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * Composition root for app-wide providers.
 *
 * Keep this file small: it should only wire providers together (no business
 * logic).
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}

