import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { BillingPage } from "../pages/BillingPage";

export interface AppRoute {
  path: string;
  label: string;
  Component: () => JSX.Element;
}

/**
 * Route definitions for the application.
 *
 * This is intentionally router-agnostic so you can plug in React Router,
 * TanStack Router, Next.js, etc.
 */
export const routes: AppRoute[] = [
  { path: "/", label: "Dashboard", Component: DashboardPage },
  { path: "/login", label: "Login", Component: LoginPage },
  { path: "/billing", label: "Billing", Component: BillingPage },
];
