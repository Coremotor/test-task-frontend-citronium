import reducer from './reducer'
import {
    onAddDelCountProductBtn,
    onAddInBasketBtnClick,
    onLangBtnClick,
    onProductCountZero,
    onSubmitForm,
    setCurrentPage
} from "../actionCreators/actionCreators";
import initialState from "../initialState";


describe('reducer', () => {

    const state = initialState

    it('ON_ADD_IN_BASKET_BTN_CLICK', () => {
        const props = {
            id: "string",
            productNameRU: "string",
            productNameEN: "string",
            productImgUrl: "string",
            productDescriptionRU: "string",
            productDescriptionEN: "string",
            productPriceEURO: 0,
            productQuantity: 0,
            inBasket: true
        }
        const action = onAddInBasketBtnClick(props)
        expect(reducer(state, action)).toEqual({
            ...state,
            basket: [
                ...state.basket,
                action.props
            ]
        })
    })

    it('ON_LANG_BTN_CLICK', () => {
        const action = onLangBtnClick('string')
        expect(reducer(state, action)).toEqual({
            ...state,
            lang: action.lang
        })
    })

    it('ON_SUBMIT_FORM', () => {
        const action = onSubmitForm([])
        expect(reducer(state, action)).toEqual({
            ...state,
            basket: action.emptyArr
        })
    })

    it('ON_ADD_DEL_COUNT_PRODUCT_BTN', () => {

        const action = onAddDelCountProductBtn('id', 0)
        expect(reducer(state, action)).toEqual({
            ...state,
            basket: [...state.basket].map((product) => {
                if (product.id === action.productInBasketId) {
                    product.productQuantity += action.count
                    return product
                } else {
                    return product
                }

            })
        })
    })

    it('ON_PRODUCT_COUNT_ZERO', () => {
        const action = onProductCountZero('id')
        expect(reducer(state, action)).toEqual({
            ...state,
            basket: [...state.basket].filter((item) => item.id !== action.productInBasketId)
        })
    })

    it('SET_CURRENT_PAGE', () => {
        const action = setCurrentPage(1)
        expect(reducer(state, action)).toEqual({
            ...state,
            currentPage: action.currentPage
        })
    })
})


