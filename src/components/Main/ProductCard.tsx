import React from "react"
import {createUseStyles} from "react-jss"
import {IProduct} from "../../interfaces/interfaces"
import {useDispatch, useSelector} from "react-redux"
import {IStore} from '../../interfaces/interfaces'
import {currencyConvert, currencyCourseRUBUSD} from "../libs/currencyConvert"
import {onAddInBasketBtnClick} from "../../store/actionCreators/actionCreators"

const useStyles = createUseStyles({
    productCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: [
            [1, 'solid', 'blue']
        ],
        padding: 10,
        backgroundColor: "white",
    },
    productCardInner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
    },
    productCardTitle: {
        marginBottom: 20,
    },
    img: {
        width: 200,
        height: 250,
    },
    productCardPriceCurrency: {
        marginLeft: 10
    }
})

const ProductCard = (props: IProduct) => {
    const lang = useSelector((state: IStore) => state.lang)
    const basket = useSelector((state: IStore) => state.basket)
    const dispatch = useDispatch()
    const classes = useStyles()

    const indexProductInBasket = basket.findIndex((item) => item.id === props.id)

    return (
        <article className={classes.productCard}>
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
            <div className={classes.productCardInner}>
                <span>
                    {
                        lang === 'en'
                            ? props.productPriceUSD
                            : currencyConvert(props.productPriceUSD, currencyCourseRUBUSD)
                    }
                    <span className={classes.productCardPriceCurrency}>
                        {
                            lang === 'en' ? "USD" : "RUB"
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
                        // basket.find((item) => item.id === props.id)!.inBasket
                    }
                >Add
                </button>
            </div>
        </article>
    )
}

export default ProductCard;




