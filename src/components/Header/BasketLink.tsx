import React from "react";
import {createUseStyles} from "react-jss";
import {useSelector} from "react-redux";
import {IStore} from "../../interfaces/interfaces";
import {NavLink} from "react-router-dom";
import {reduceProductInBasketQuantity} from "../../libs/reduceProductInBasketProps";

const useStyles = createUseStyles({
    basketLinkWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    link: {
        width: 24,
        height: 24,
        marginRight: 20,
    }
})

const BasketLink = () => {

    const classes = useStyles()
    const basket = useSelector((state: IStore) => state.basket)

    const productsInBasketQuantity = reduceProductInBasketQuantity(basket)

    return (
        <div className={classes.basketLinkWrapper}>
            <NavLink className={classes.link} to="/basket">
                <img src="./img/basketIcon.svg" alt="Go to bucket"/>
            </NavLink>

            {
                productsInBasketQuantity !== 0 &&
                <span>
                {
                    productsInBasketQuantity > 9 ? '9+' : productsInBasketQuantity
                }
                </span>
            }
        </div>
    )
}

export default BasketLink;
