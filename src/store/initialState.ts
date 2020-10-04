import {v4 as uuidv4} from 'uuid';
import {IStore} from '../interfaces/interfaces'

const initialState: IStore = {
    lang: 'en',
    products: [
        {
            id: uuidv4(),
            productNameRU: 'Товар1',
            productNameEN: 'Product1',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 60,
            productQuantity: 1
        },
        {
            id: uuidv4(),
            productNameRU: 'Товар2',
            productNameEN: 'Product2',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 60,
            productQuantity: 1
        },
        {
            id: uuidv4(),
            productNameRU: 'Товар3',
            productNameEN: 'Product3',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 60,
            productQuantity: 1
        },
        {
            id: uuidv4(),
            productNameRU: 'Товар4',
            productNameEN: 'Product4',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 60,
            productQuantity: 1
        },
        {
            id: uuidv4(),
            productNameRU: 'Товар5',
            productNameEN: 'Product5',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 60,
            productQuantity: 1
        },
    ],
    basket: [],
}

export default initialState;
