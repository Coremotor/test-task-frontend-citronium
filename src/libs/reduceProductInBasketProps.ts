import {IProduct} from "../interfaces/interfaces";

export function reduceProductInBasketQuantity(array: Array<IProduct>): number {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.productQuantity
    }, 0)
}

export function reduceProductInBasketPrice(array: Array<IProduct>): number {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.productPriceEURO * currentValue.productQuantity
    }, 0)
}
