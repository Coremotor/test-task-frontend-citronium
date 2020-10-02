import { v4 as uuidv4 } from 'uuid';

const initialState = {
    lang: 'en',
    products: [
        {
            id: uuidv4(),
            productNameRU: 'Товар',
            productNameEN: 'Product',
            productImgUrl: 'https://placekitten.com/200/250',
            productDescriptionRU: 'Описание товара',
            productDescriptionEN: 'Product description',
            productPriceUSD: 60,
            productQuantity: 0
        },
    ],
    basket: [],
}

export default initialState;
