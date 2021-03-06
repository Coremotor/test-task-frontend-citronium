export interface IStore {
    lang: string,
    products: IProduct[],
    basket: IProduct[],
    currentPage: number,
}

export interface IProduct {
    id: string,
    productNameRU: string,
    productNameEN: string,
    productImgUrl: string,
    productDescriptionRU: string,
    productDescriptionEN: string,
    productPriceEURO: number,
    productQuantity: number,
    inBasket: boolean
}
