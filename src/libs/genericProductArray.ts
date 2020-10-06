import {IProduct} from "../interfaces/interfaces";
import * as faker from "faker";

export function genericProductArray (productQuantity: number): IProduct[] {
    const productArr = []
    for (let i = 0; i < productQuantity; i++) {
        productArr.push(
            {
                id: faker.random.uuid(),
                productNameRU: `Товар ${i}`,
                productNameEN: `Product ${i}`,
                productImgUrl: faker.random.image(),
                productDescriptionRU: `Описание товара № ${i}`,
                productDescriptionEN: `Product description № ${i}`,
                productPriceEURO: faker.random.number(100),
                productQuantity: 1,
                inBasket: true
            },
        )
    }
    return productArr
}
