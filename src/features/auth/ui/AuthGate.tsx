import React from "react";

import { useAuth } from "../hooks/useAuth";

export interface AuthGateProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AuthGate({ children, fallback }: AuthGateProps) {
  const { status } = useAuth();
  if (status !== "authenticated") return <>{fallback ?? null}</>;
  return <>{children}</>;
}

