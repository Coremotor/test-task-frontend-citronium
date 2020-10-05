import {IStore} from '../interfaces/interfaces'

const initialState: IStore = {
    lang: 'en',
    products: [
        {
            id: 1,
            productNameRU: 'Товар1',
            productNameEN: 'Product1',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 32,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 2,
            productNameRU: 'Товар2',
            productNameEN: 'Product2',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 15,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 3,
            productNameRU: 'Товар3',
            productNameEN: 'Product3',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 20,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 4,
            productNameRU: 'Товар4',
            productNameEN: 'Product4',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 10,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 5,
            productNameRU: 'Товар5',
            productNameEN: 'Product5',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 16,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 6,
            productNameRU: 'Товар6',
            productNameEN: 'Product6',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 32,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 7,
            productNameRU: 'Товар7',
            productNameEN: 'Product7',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 15,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 8,
            productNameRU: 'Товар8',
            productNameEN: 'Product8',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 20,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 9,
            productNameRU: 'Товар9',
            productNameEN: 'Product9',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 10,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 10,
            productNameRU: 'Товар10',
            productNameEN: 'Product10',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 16,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 11,
            productNameRU: 'Товар11',
            productNameEN: 'Product11',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 32,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 12,
            productNameRU: 'Товар12',
            productNameEN: 'Product12',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 15,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 13,
            productNameRU: 'Товар13',
            productNameEN: 'Product13',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 20,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 14,
            productNameRU: 'Товар14',
            productNameEN: 'Product14',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 10,
            productQuantity: 1,
            inBasket: false
        },
        {
            id: 15,
            productNameRU: 'Товар15',
            productNameEN: 'Product15',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 16,
            productQuantity: 1,
            inBasket: false
        },
    ],
    basket: [
        {
            id: 4,
            productNameRU: 'Товар4',
            productNameEN: 'Product4',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 10,
            productQuantity: 3,
            inBasket: true
        },
    ],
}

export default initialState;
