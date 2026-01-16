import React from "react";

import { BillingSummary, UpgradeButton } from "../features/billing";

export function BillingPage() {
  return (
    <section>
      <h2>Billing</h2>
      <BillingSummary />
      <UpgradeButton />
    </section>
  );
}

