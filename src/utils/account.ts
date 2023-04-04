const accountOmiter = (account: string): string => {
  return `${account.slice(0, 6)}...${account.slice(-4)}`;
};

export { accountOmiter };
