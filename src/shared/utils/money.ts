export function formatMoney(amountMinor: number, currency: string): string {
  const amountMajor = amountMinor / 100;
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
    }).format(amountMajor);
  } catch {
    return `${amountMajor.toFixed(2)} ${currency}`;
  }
}

