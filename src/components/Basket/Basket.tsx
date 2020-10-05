import React from "react";
import {createUseStyles} from "react-jss";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IStore, IProduct} from '../../interfaces/interfaces';
import {currencyConvert, currencyCourseRUBUSD} from "../../libs/currencyConvert";
import {onProductCountZero, onUpDownCountProductBtn} from "../../store/actionCreators/actionCreators";
import {reduceProductInBasketPrice, reduceProductInBasketQuantity} from "../../libs/reduceProductInBasketProps";

const useStyles = createUseStyles({
    basket: {
        maxWidth: 1280,
        width: "100%",
        height: "1000vh",
        display: "flex",
        flexDirection: "column",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 30,
    },
    basketEmpty: {
        textAlign: "center",
        marginTop: 50,
    },
    basketCurrency: {
        marginLeft: 10
    },
    basketTitle: {
        marginTop: 20
    },
    list: {
        listStyle: "none",
        borderBottom: ['1px', 'solid', 'gray'],
        marginBottom: 40,
    },
    item: {
        display: "flex",
        marginBottom: 20,
    },
    number: {
        marginRight: 5,
    },
    name: {
        marginRight: 10,
    },
    description: {
        marginRight: 20,
    },
    price: {
        marginRight: "auto",
    },
    delBtn: {
        marginRight: 10,
    },
    productCount: {
        marginRight: 10,
    },
    addBtn: {
        marginRight: 30,
    },
    summaryPrice: {
        marginRight: 10,
    },
    wrapper: {
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "center",
    },
    basketAllProductCount: {
        marginLeft: 10,
    },
    basketAllProductPrice: {
        marginLeft: 10,
    },
    link: {
        display: "block",
        alignSelf: "center",
        backgroundColor: "gray",
        textDecoration: "none",
        color: "white",
        padding: {
            top: 10,
            right: 20,
            bottom: 10,
            left: 20
        },
        marginTop: 40,
        marginBottom: 40,
        '&:hover': {
            boxShadow: [
                [0, 0, 6, 2, 'gray'],
            ],
        },
    }
})

const Basket = () => {

    const classes = useStyles()
    const dispatch = useDispatch();
    const lang = useSelector((state: IStore) => state.lang)
    const basket = useSelector((state: IStore) => state.basket)

    basket.forEach((productInBasket) => {
        if (productInBasket.productQuantity === 0) {
            dispatch(onProductCountZero(productInBasket.id))
        }
    })

    return (
        <section className={classes.basket}>
            <h2 className={classes.basketTitle}>Basket</h2>
            {
                basket.length === 0 && <span className={classes.basketEmpty}>Basket is empty</span>
            }
            <ul className={classes.list}>
                {
                    basket.map((productInBasket: IProduct, index) => {

                        // if (productInBasket.productQuantity === 0) dispatch(onProductCountZero(productInBasket.id))

                        return (
                            <li key={productInBasket.id} className={classes.item}>
                                <span className={classes.number}>{index + 1 + '.'}</span>
                                <span
                                    className={classes.name}>{
                                    lang === 'en'
                                        ? productInBasket.productNameEN
                                        : productInBasket.productNameRU}
                                </span>
                                <span
                                    className={classes.description}>
                                    {
                                        lang === 'en'
                                            ? productInBasket.productDescriptionEN
                                            : productInBasket.productDescriptionRU
                                    }
                                </span>
                                <span
                                    className={classes.price}>
                                    {
                                        lang === 'en'
                                            ? productInBasket.productPriceUSD
                                            : currencyConvert(productInBasket.productPriceUSD, currencyCourseRUBUSD)}
                                    <span className={classes.basketCurrency}>
                                        {
                                            lang === 'en' ? "USD" : "RUB"
                                        }
                                    </span>
                                </span>

                                <button className={classes.delBtn}
                                        onClick={
                                            () => dispatch(onUpDownCountProductBtn(productInBasket.id, -1))
                                        }
                                >Del
                                </button>
                                <span className={classes.productCount}>{productInBasket.productQuantity}</span>
                                <button className={classes.addBtn}
                                        onClick={
                                            () => dispatch(onUpDownCountProductBtn(productInBasket.id, 1))
                                        }>Add
                                </button>

                                <span
                                    className={classes.summaryPrice}>
                                    {
                                        lang === 'en'
                                            ? productInBasket.productPriceUSD * productInBasket.productQuantity
                                            : Number(currencyConvert(productInBasket.productPriceUSD, currencyCourseRUBUSD) * productInBasket.productQuantity).toFixed(2)
                                    }
                                    <span className={classes.basketCurrency}>
                                        {
                                            lang === 'en' ? "USD" : "RUB"
                                        }
                                    </span>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>

            {
                basket.length !== 0 &&
                <div className={classes.wrapper}>
                    <span>All product count:
                        <span className={classes.basketAllProductCount}>
                            {
                                reduceProductInBasketQuantity(basket)
                            }
                        </span>
                    </span>
                    <span>All summary price:
                            <span className={classes.basketAllProductPrice}>
                                {
                                    lang === 'en'
                                        ? reduceProductInBasketPrice(basket)
                                        : Number(currencyConvert(reduceProductInBasketPrice(basket), currencyCourseRUBUSD)).toFixed(2)
                                }
                            </span>
                        <span className={classes.basketCurrency}>
                            {
                                lang === 'en' ? "USD" : "RUB"
                            }
                        </span>
                    </span>
                </div>
            }

            {
                basket.length !== 0 && <NavLink className={classes.link} to="/form">Make an order</NavLink>
            }

            <NavLink className={classes.link} to='/'>Go to main page</NavLink>
        </section>
    )
}

export default Basket;
