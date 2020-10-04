import React from "react";
import {createUseStyles} from "react-jss";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {IStore, IProduct} from '../../interfaces/interfaces';
import {currencyConvert, currencyCourseRUBUSD} from "../libs/currencyConvert";

const useStyles = createUseStyles({
    basket: {
        maxWidth: 1280,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 30,
    },
    list: {
        listStyle: "none",
        marginBottom: 40,
    },
    item: {
        display: "flex",
        marginBottom: 20,
    },
    number: {
        marginRight: 10,
    },
    name: {
        marginRight: 10,
    },
    description: {
        marginRight: 10,
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
    link: {
        alignSelf: "center",
        marginBottom: 40,
    }
})

const Basket = () => {

    const classes = useStyles()
    const lang = useSelector((state: IStore) => state.lang)
    const basket = useSelector((state: IStore) => state.basket)

    return (
        <section className={classes.basket}>
            <h2>Basket</h2>
            <ul className={classes.list}>
                {
                    basket.map((productInBasket: IProduct, index) => {
                        return (
                            <li key={productInBasket.id} className={classes.item}>
                                <span className={classes.number}>{index + 1 + '.'}</span>
                                <span className={classes.name}>{lang === 'en' ? productInBasket.productNameEN : productInBasket.productNameRU}</span>
                                <span className={classes.description}>{lang === 'en' ? productInBasket.productDescriptionEN : productInBasket.productDescriptionRU}</span>
                                <span className={classes.price}>{lang === 'en' ? productInBasket.productPriceUSD : currencyConvert(productInBasket.productPriceUSD, currencyCourseRUBUSD)}</span>

                                <button className={classes.delBtn}>Del</button>
                                <span className={classes.productCount}>{productInBasket.productQuantity}</span>
                                <button className={classes.addBtn}>Add</button>

                                <span className={classes.summaryPrice}>{lang === 'en' ? productInBasket.productPriceUSD * productInBasket.productQuantity : currencyConvert(productInBasket.productPriceUSD, currencyCourseRUBUSD) * productInBasket.productQuantity}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={classes.wrapper}>
                <span>All product count</span>
                <span>All summary price</span>
            </div>

            <NavLink className={classes.link} to="/form">Make an order</NavLink>
        </section>
    )
}

export default Basket;
