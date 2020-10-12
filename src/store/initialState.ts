import {IStore} from '../interfaces/interfaces'
import {genericProductArray} from "../libs/genericProductArray";

const initialState: IStore = {
    lang: 'en',
    products: [
        ...genericProductArray(30)
    ],
    basket: [],
    currentPage: 1,
}

export default initialState;
