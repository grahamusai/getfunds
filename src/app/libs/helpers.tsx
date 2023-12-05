//round to nearest whole number
export const round = (amount: number) => Math.round(amount);

//format value to locale us
export const formatCurrency = (amount: number) =>
  amount.toLocaleString("en-US");
