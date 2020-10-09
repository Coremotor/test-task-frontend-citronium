import {IProduct} from "../interfaces/interfaces";

//построение масива для отображения продуктов на странице
export const buildArrayProductsForShowOnPage = (currentPage: number, RENDER_PAGE_QUANTITY: number, products: IProduct[]) => {
    const showProductsArray: IProduct[] = []
    let endOfPageCount = currentPage * RENDER_PAGE_QUANTITY
    for (let i = (endOfPageCount - (RENDER_PAGE_QUANTITY)); i < endOfPageCount; i++) {
        if (products[i]) {
            showProductsArray.push(products[i])
        } else {
            break
        }
    }
    return showProductsArray
}
