import React, { useState } from "react";

import type { AuthCredentials } from "../model/auth.types";
import { useAuth } from "../hooks/useAuth";

export function LoginForm() {
  const { login, error, status } = useAuth();
  const [form, setForm] = useState<AuthCredentials>({ email: "", password: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void login(form);
      }}
    >
      <div style={{ display: "grid", gap: 8, maxWidth: 360 }}>
        <label>
          Email
          <input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            type="email"
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <input
            value={form.password}
            onChange={(e) =>
              setForm((p) => ({ ...p, password: e.target.value }))
            }
            type="password"
            autoComplete="current-password"
          />
        </label>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Signing in..." : "Sign in"}
        </button>
        {error ? <p style={{ color: "crimson" }}>{error}</p> : null}
      </div>
    </form>
  );
}

