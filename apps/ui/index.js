import Currency from "@woocommerce/currency";

const currency = Currency({});
const amount = currency.formatAmount(345234.324234);
console.log(amount);
