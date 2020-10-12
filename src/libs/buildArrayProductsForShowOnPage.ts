import {IProduct} from "../interfaces/interfaces";

//построение масива для отображения продуктов на странице
export const buildArrayProductsForShowOnPage = (currentPage: number, RENDER_ON_PAGE_PRODUCTS_QUANTITY: number, products: IProduct[]) => {
    const showProductsArray: IProduct[] = []
    //получаем индекс последнего продукта в массиве
    let endOfPageCount = currentPage * RENDER_ON_PAGE_PRODUCTS_QUANTITY
    //циклом заполняем массив для отображения
    for (let i = (endOfPageCount - (RENDER_ON_PAGE_PRODUCTS_QUANTITY)); i < endOfPageCount; i++) {
        if (products[i]) {
            showProductsArray.push(products[i])
        } else {
            break
        }
    }
    return showProductsArray
}
