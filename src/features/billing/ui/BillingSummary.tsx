import React, { useEffect, useState } from "react";

import type { BillingSummary as BillingSummaryModel } from "../model/billing.types";
import { billingRepository } from "../data/billing.repository";
import { formatMoney } from "../../../shared/utils/money";

export function BillingSummary() {
  const [summary, setSummary] = useState<BillingSummaryModel | null>(null);

  useEffect(() => {
    let active = true;
    void (async () => {
      const s = await billingRepository.getSummary();
      if (active) setSummary(s);
    })();
    return () => {
      active = false;
    };
  }, []);

  if (!summary) return <p>Loading billing summary…</p>;

  return (
    <div>
      <p>
        Plan: <strong>{summary.planName}</strong>
      </p>
      <p>
        Renewal: <strong>{summary.renewalDateISO}</strong>
      </p>
      <p>
        Price:{" "}
        <strong>
          {formatMoney(summary.amountMinor, summary.currency)}
        </strong>
      </p>
    </div>
  );
}

