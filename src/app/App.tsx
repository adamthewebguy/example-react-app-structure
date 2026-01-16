import React from "react";

import { AppProviders } from "./providers/AppProviders";
import { routes } from "./routes";

export function App() {
  return (
    <AppProviders>
      <main style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
        <h1>Example App Structure</h1>
        <p>This is a minimal wiring stub. Replace this with your router / route rendering.</p>
        <h2>Routes</h2>
        <ul>
          {routes.map((r) => (
            <li key={r.path}>
              <code>{r.path}</code> — {r.label}
            </li>
          ))}
        </ul>
      </main>
    </AppProviders>
  );
}
