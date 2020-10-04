import initialState from '../initialState'
import {ON_ADD_IN_BASKET_BTN_CLICK, ON_LANG_BTN_CLICK, ON_SUBMIT_FORM} from "../actionTypes/actionTypes"

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
        default:
            return {
                ...state
            }
    }
}

export default reducer;
