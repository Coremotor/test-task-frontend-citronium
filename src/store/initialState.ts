import {IStore} from '../interfaces/interfaces'
import {genericProductArray} from "../libs/genericProductArray";

const initialState: IStore = {
    lang: 'en',
    products: [
        ...genericProductArray(10)
    ],
    basket: [],
}

export default initialState;
