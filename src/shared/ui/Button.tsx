import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * Shared button component.
 *
 * Preference: MUI. If you use MUI, replace this with a thin wrapper around
 * `@mui/material/Button` to centralise defaults.
 */
export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        padding: "8px 12px",
        borderRadius: 8,
        border: "1px solid #ddd",
        background: "#fff",
        cursor: "pointer",
        ...(props.style ?? {}),
      }}
    >
      {children}
    </button>
  );
}

