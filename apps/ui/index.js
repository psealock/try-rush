import Currency from "@woocommerce/currency";

const currency = Currency({});
const amount = currency.formatAmount(3821.3434);
console.log(amount);
