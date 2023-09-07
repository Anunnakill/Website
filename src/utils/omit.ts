const addressOmitted = (address: string) => {
  if (address) return `${address.slice(0, 6)}...${address.slice(-4)}`;
  return undefined;
};

const amountOmitted = (amount: string) => {
  return amount.match(/^\d+(?:\.\d{0,4})?/)?.toString() || "0.0000";
};

export { addressOmitted, amountOmitted };
