import React from "react";

import { bootstrapApp } from "./app/bootstrap";
import { App } from "./app/App";

bootstrapApp();

/**
 * Entry point.
 *
 * This is intentionally minimal, since different stacks render differently
 * (React DOM, React Native, SSR, etc).
 */
export function Main() {
  return <App />;
}

