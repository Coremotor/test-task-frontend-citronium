import {
    ON_ADD_IN_BASKET_BTN_CLICK,
    ON_LANG_BTN_CLICK,
    ON_PRODUCT_COUNT_ZERO,
    ON_SUBMIT_FORM,
    ON_ADD_DEL_COUNT_PRODUCT_BTN,
    SET_CURRENT_PAGE,
} from "../actionTypes/actionTypes";
import {IProduct} from "../../interfaces/interfaces"

export function onAddInBasketBtnClick(props: IProduct) {
    return {
        type: ON_ADD_IN_BASKET_BTN_CLICK,
        props,
    }
}

export function onLangBtnClick(lang: string) {
    return {
        type: ON_LANG_BTN_CLICK,
        lang,
    }
}

export function onSubmitForm(emptyArr: []) {
    return {
        type: ON_SUBMIT_FORM,
        emptyArr,
    }
}

export function onAddDelCountProductBtn(productInBasketId: string, count: number) {
    return {
        type: ON_ADD_DEL_COUNT_PRODUCT_BTN,
        productInBasketId,
        count,
    }
}

export function onProductCountZero(productInBasketId: string) {
    return {
        type: ON_PRODUCT_COUNT_ZERO,
        productInBasketId,
    }
}

export function setCurrentPage(currentPage: number) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}
