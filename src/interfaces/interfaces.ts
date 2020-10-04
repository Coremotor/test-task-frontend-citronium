export interface IStore {
    lang: string,
    products: IProduct[],
    basket: IProduct[ ]
}

export interface IProduct {
    id: any,
    productNameRU: string,
    productNameEN: string,
    productImgUrl: string,
    productDescriptionRU: string,
    productDescriptionEN: string,
    productPriceUSD: number,
    productQuantity: number
}
