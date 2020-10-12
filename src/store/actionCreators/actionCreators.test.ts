import {
    ON_ADD_IN_BASKET_BTN_CLICK,
    ON_LANG_BTN_CLICK,
    ON_PRODUCT_COUNT_ZERO,
    ON_SUBMIT_FORM,
    ON_ADD_DEL_COUNT_PRODUCT_BTN,
    SET_CURRENT_PAGE,
} from "../actionTypes/actionTypes";

import {
    onAddInBasketBtnClick,
    onLangBtnClick,
    onSubmitForm,
    onAddDelCountProductBtn,
    onProductCountZero,
    setCurrentPage
} from './actionCreators'

describe('actionCreators', () => {
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

    it('onAddInBasketBtnClick ', () => {
        expect(onAddInBasketBtnClick(props)).toEqual({
            type: ON_ADD_IN_BASKET_BTN_CLICK,
            props,
        })
    })

    it('onLangBtnClick ', () => {
        expect(onLangBtnClick('string')).toEqual({
            type: ON_LANG_BTN_CLICK,
            lang: 'string'
        })
    })

    it('onSubmitForm ', () => {
        expect(onSubmitForm([])).toEqual({
            type: ON_SUBMIT_FORM,
            emptyArr: []
        })
    })

    it('onAddDelCountProductBtn ', () => {
        expect(onAddDelCountProductBtn('id', 1)).toEqual({
            type: ON_ADD_DEL_COUNT_PRODUCT_BTN,
            productInBasketId: 'id',
            count: 1
        })
    })

    it('onProductCountZero ', () => {
        expect(onProductCountZero('id')).toEqual({
            type: ON_PRODUCT_COUNT_ZERO,
            productInBasketId: 'id'
        })
    })

    it('setCurrentPage ', () => {
        expect(setCurrentPage(1)).toEqual({
            type: SET_CURRENT_PAGE,
            currentPage: 1
        })
    })
})
