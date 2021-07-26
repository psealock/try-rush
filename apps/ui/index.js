import Currency from "@woocommerce/currency";

const currency = Currency({});
const amount = currency.formatAmount(6821.3434);
console.log(amount);
