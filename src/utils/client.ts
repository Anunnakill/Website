const isApp = () => {
  const width = document.body.clientWidth;
  if (width <= 768) return true;
  return false;
};

export { isApp };
