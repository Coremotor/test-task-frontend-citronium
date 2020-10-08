import React from "react"
import {createUseStyles} from "react-jss"
import {IProduct} from "../../interfaces/interfaces"
import {useDispatch, useSelector} from "react-redux"
import {IStore} from '../../interfaces/interfaces'
import {currencyConvert} from "../../libs/currencyConvert"
import {onAddInBasketBtnClick} from "../../store/actionCreators/actionCreators"
import {FormattedMessage} from "react-intl";
import {CURRENCY_COURSE_RUB_EURO} from "../globalConstants/globalConstants";

const useStyles = createUseStyles({
    productCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#9cb9d1",
        color: "#094d74",
        borderRadius: 5,
        "&:hover": {
            boxShadow: [
                [0, 0, 6, 2, 'gray'],
            ],
        }
    },
    productCardAdded: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        borderRadius: 5,
        padding: 20,
        backgroundColor: "#759cd8",
    },
    productCardTitle: {
        marginBottom: 20,
    },
    img: {
        width: "100%"
    },
    productCardPriceCurrency: {
        marginLeft: 10
    },
    productCardPrice: {
        marginBottom: 20
    }
})

const ProductCard = (props: IProduct) => {
    const classes = useStyles()
    const lang: string = useSelector((state: IStore) => state.lang)
    const basket: IProduct[] = useSelector((state: IStore) => state.basket)
    const dispatch = useDispatch()

    const indexProductInBasket = basket.findIndex((item) => item.id === props.id)

    return (
        <article
            className={(indexProductInBasket === -1 ? false : basket[indexProductInBasket].inBasket) ? classes.productCardAdded : classes.productCard}>
            <h2 className={classes.productCardTitle}>
                {
                    lang === 'en'
                        ? props.productNameEN
                        : props.productNameRU
                }
            </h2>

            <img className={classes.img} src={props.productImgUrl} alt="Изображение товара"/>

            <p>
                {
                    lang === 'en'
                        ? props.productDescriptionEN
                        : props.productDescriptionRU
                }
            </p>

            <span className={classes.productCardPrice}>
                    {
                        lang === 'en'
                            ? props.productPriceEURO
                            : currencyConvert(props.productPriceEURO, CURRENCY_COURSE_RUB_EURO)
                    }
                <span className={classes.productCardPriceCurrency}>
                        {
                            lang === 'en' ? "EURO" : "RUB"
                        }
                </span>
            </span>

            <button
                onClick={
                    () => {
                        dispatch(onAddInBasketBtnClick({...props, inBasket: true}))
                    }
                }
                disabled={
                    indexProductInBasket === -1 ? false : basket[indexProductInBasket].inBasket
                }
            >
                <FormattedMessage
                    id='addInBasket'
                    defaultMessage='Add to Shopping Cart'
                />
            </button>

        </article>
    )
}

export default ProductCard;




