import initialState from '../initialState'
import {
    ON_ADD_IN_BASKET_BTN_CLICK,
    ON_LANG_BTN_CLICK, ON_PRODUCT_COUNT_ZERO,
    ON_SUBMIT_FORM,
    ON_ADD_DEL_COUNT_PRODUCT_BTN,
    SET_CURRENT_PAGE,
} from "../actionTypes/actionTypes"

function reducer(state = initialState, action: any): any {

    switch (action.type) {
        case ON_ADD_IN_BASKET_BTN_CLICK:
            return {
                ...state, basket: [...state.basket, action.props]
            };

        case ON_LANG_BTN_CLICK:
            return {
                ...state, lang: action.lang
            };

        case ON_SUBMIT_FORM:
            return {
                ...state, basket: action.emptyArr
            };

        case ON_ADD_DEL_COUNT_PRODUCT_BTN:
            return {
                ...state, basket: [...state.basket].map((product) => {
                    if (product.id === action.productInBasketId) {
                        product.productQuantity += action.count
                        return product
                    } else {
                        return product
                    }
                })
            };

        case ON_PRODUCT_COUNT_ZERO:
            return {
                ...state, basket: [...state.basket].filter((item) => item.id !== action.productInBasketId)
            };

        case SET_CURRENT_PAGE:
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
