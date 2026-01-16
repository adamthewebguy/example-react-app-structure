/**
 * Stripe client initialisation.
 *
 * Keep vendor SDK wiring in `integrations/`.
 */
export interface StripeClient {
  charge(customerId: string, amountMinor: number, currency: string): Promise<void>;
}

export const stripeClient: StripeClient = {
  async charge(customerId, amountMinor, currency) {
    console.log("Stripe charge (stub)", { customerId, amountMinor, currency });
  },
};

