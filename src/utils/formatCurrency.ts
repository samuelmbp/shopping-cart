const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "GBP",
  style: "currency",
});

const formatCurrency = (currency: number) =>
  CURRENCY_FORMATTER.format(currency);

export default formatCurrency;
