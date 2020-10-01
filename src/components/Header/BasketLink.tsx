import React from "react";
import {createUseStyles} from "react-jss";

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

    return (
        <div className={classes.basketLinkWrapper}>
            <a className={classes.link} href="#">
                <img src="./img/basketIcon.svg" alt="Go to bucket"/>
            </a>

            <span>5</span>
        </div>
    )
}

export default BasketLink;
