import initialState from '../initialState'
import {
    ON_ADD_IN_BASKET_BTN_CLICK,
    ON_LANG_BTN_CLICK, ON_PRODUCT_COUNT_ZERO,
    ON_SUBMIT_FORM,
    ON_UP_DOWN_COUNT_PRODUCT_BTN,
    SET_CURRENT_PAGE,
    SET_CURRENT_PAGE_PRODUCTS
} from "../actionTypes/actionTypes"

function reducer(state = initialState, action: any): any {

    switch (action.type) {
        case ON_ADD_IN_BASKET_BTN_CLICK:
            console.log(action.props)
            return {
                ...state, basket: [...state.basket, action.props]
            };

        case ON_LANG_BTN_CLICK:
            console.log(action.lang)
            return {
                ...state, lang: action.lang
            };
        case ON_SUBMIT_FORM:
            console.log(action.emptyArr)
            return {
                ...state, basket: action.emptyArr
            };
        case ON_UP_DOWN_COUNT_PRODUCT_BTN:
            console.log(action)
            return {
                ...state, basket: [...state.basket].map((item) => {
                    if (item.id === action.productInBasketId) {
                        item.productQuantity += action.count
                        return item
                    } else {
                        return item
                    }
                })
            };
        case ON_PRODUCT_COUNT_ZERO:
            console.log(action)
            return {
                ...state, basket: [...state.basket].filter((item) => item.id !== action.productInBasketId)
            };
        case SET_CURRENT_PAGE_PRODUCTS:
            console.log(action)
            return {
                ...state, currentPageProducts: action.currentPageProducts
            };
        case SET_CURRENT_PAGE:
            console.log(action)
            return {
                ...state, currentPage: action.currentPage
            };
        default:
            return {
                ...state
            }
    }
}

export default reducer;
