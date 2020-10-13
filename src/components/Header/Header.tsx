import React from "react";
import SwitchLang from "./SwitchLang";
import BasketLink from "./BasketLink";
import {createUseStyles} from 'react-jss'
import {NavLink} from "react-router-dom";

const useStyles = createUseStyles({
    header: {
        color: "white",
        backgroundColor: "#094d74",
        paddingTop: 20,
        paddingBottom: 20,
    },
    headerInner: {
        display: "flex",
        alignItems: "center",
        maxWidth: 1280,
        padding: {
            right: 10,
            left: 10
        },
        margin: {
            top: 0,
            right: "auto",
            bottom: 0,
            left: "auto",
        },
    },
    headerTitleLink: {
        textDecoration: "none",
        color: "white",
        paddingLeft: 10,
        marginRight: "auto",
        marginTop: 8,
        '&:active': {
            color: "white"
        }
    },
    headerImg: {
        height: 40,
    }
})

const Header = () => {

    const classes = useStyles()
    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <NavLink to='/' className={classes.headerTitleLink}>
                    <img className={classes.headerImg} src="https://citronium.ru/wp-content/uploads/2019/01/Resurs-12.png" alt="Лого"/>
                </NavLink>
                <SwitchLang/>
                <BasketLink/>
            </div>
        </header>
    )
}

export default Header;
