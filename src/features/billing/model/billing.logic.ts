import type { BillingSummary } from "./billing.types";

export function canUpgrade(summary: BillingSummary): boolean {
  return summary.planName.toLowerCase() !== "enterprise";
}

