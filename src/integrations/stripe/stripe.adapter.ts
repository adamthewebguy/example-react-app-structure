import { stripeClient } from "./stripe.client";

/**
 * Adapter around Stripe to keep Stripe SDK concerns out of feature modules.
 */
export async function chargeWithStripe(input: {
  customerId: string;
  amountMinor: number;
  currency: string;
}): Promise<void> {
  return stripeClient.charge(input.customerId, input.amountMinor, input.currency);
}

