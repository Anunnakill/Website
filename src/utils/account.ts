const omiter = (account: string): string => {
  return `${account.slice(0, 6)}...${account.slice(-4)}`;
};

export { omiter };
