const DOLLAR_TO_YEN = 110; // 1 USD = 110 JPY
 const YEN_TO_POUND = 0.0069; // 1 JPY = 0.0069 GBP
 const fromEuroToDollar = (euroAmount) => {
     const exchangeRate = 1.2;
     return euroAmount * exchangeRate;
 };
 const fromDollarToYen = (dollarAmount) => {
     return dollarAmount * DOLLAR_TO_YEN;
 };
 const fromYanToPound = (yenAmount) => {
     return yenAmount * YEN_TO_POUND;
 };
 module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };