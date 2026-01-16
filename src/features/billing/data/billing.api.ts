import { httpClient } from "../../../infrastructure/http/httpClient";
import type { BillingSummary } from "../model/billing.types";

export async function getBillingSummary(): Promise<BillingSummary> {
  return httpClient.get<BillingSummary>("/billing/summary");
}

