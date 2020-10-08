export const currencyConvert = (priceEURO: number, currencyCourse: number): number => {
    return Number((priceEURO * currencyCourse).toFixed(2))
}
