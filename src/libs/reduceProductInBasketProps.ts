import {IProduct} from "../interfaces/interfaces";

//получение общего числа товаров в корзине
export function reduceProductInBasketQuantity(array: Array<IProduct>): number {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.productQuantity
    }, 0)
}

//получение общей цены всего содержимого корзины
export function reduceProductInBasketPrice(array: Array<IProduct>): number {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.productPriceEURO * currentValue.productQuantity
    }, 0)
}
