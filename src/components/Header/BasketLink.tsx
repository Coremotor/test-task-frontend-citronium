import React from "react";
import {createUseStyles} from "react-jss";
import {useSelector} from "react-redux";
import {IStore} from "../../interfaces/interfaces";
import {NavLink} from "react-router-dom";

const useStyles = createUseStyles({
    basketLinkWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    link: {
        width: 48,
        height: 48,
        marginRight: 20,
    }
})

const BasketLink = () => {

    const classes = useStyles()
    const basket = useSelector((state: IStore)=>state.basket)
    console.log(basket)

    return (
        <div className={classes.basketLinkWrapper}>
            <NavLink className={classes.link} to="/basket">
                <img src="./img/basketIcon.svg" alt="Go to bucket"/>
            </NavLink>

            <span>{basket.length}</span>
        </div>
    )
}

export default BasketLink;
