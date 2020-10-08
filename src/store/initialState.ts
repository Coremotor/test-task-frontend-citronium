import {IStore} from '../interfaces/interfaces'
import {genericProductArray} from "../libs/genericProductArray";

const initialState: IStore = {
    lang: 'en',
    products: [
        ...genericProductArray(100)
    ],
    basket: [],
    pagesArray: [],
    currentPage: 2,
    currentPageProducts: []
}

export default initialState;
