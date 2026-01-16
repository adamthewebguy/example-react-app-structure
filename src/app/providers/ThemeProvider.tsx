import React from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Theme provider boundary.
 *
 * Preference: Material UI (MUI). If you're using MUI, replace this with
 * `@mui/material/styles` ThemeProvider + CssBaseline.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>;
}

