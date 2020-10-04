import {ON_ADD_IN_BASKET_BTN_CLICK, ON_LANG_BTN_CLICK, ON_SUBMIT_FORM} from "../actionTypes/actionTypes";
import {IProduct} from "../../interfaces/interfaces";

export function onAddInBasketBtnClick(props: IProduct) {
    return {
        type: ON_ADD_IN_BASKET_BTN_CLICK,
        props
    }
}

export function onLangBtnClick(lang: string) {
    return {
        type: ON_LANG_BTN_CLICK,
        lang
    }
}

export function onSubmitForm(emptyArr: []) {
    return {
        type: ON_SUBMIT_FORM,
        emptyArr
    }
}
