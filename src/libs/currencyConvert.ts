export const currencyCourseRUBUSD = 78.19

export const currencyConvert = (priceUSD: number, currencyCourse: number): number => {
    return Number((priceUSD * currencyCourse).toFixed(2))
}
