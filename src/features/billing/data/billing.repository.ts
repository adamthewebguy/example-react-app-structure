import type { BillingSummary } from "../model/billing.types";
import { getBillingSummary } from "./billing.api";

export interface BillingRepository {
  getSummary(): Promise<BillingSummary>;
}

export const billingRepository: BillingRepository = {
  async getSummary() {
    return getBillingSummary();
  },
};

