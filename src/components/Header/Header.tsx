import React from "react";
import SwitchLang from "./SwitchLang";
import Basket from "./BasketLink";
import {createUseStyles} from 'react-jss'
import {NavLink} from "react-router-dom";

import {FormattedMessage} from 'react-intl'

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
        marginRight: "auto",
        marginBottom: 8,
        '&:active': {
            color: "white"
        }
    },
})

const Header = () => {

    const classes = useStyles()
    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <NavLink to='/' className={classes.headerTitleLink}>
                    <h1>
                        <FormattedMessage
                            id='marketName'
                            defaultMessage='Market'
                        />
                    </h1>
                </NavLink>
                <SwitchLang/>
                <Basket/>
            </div>
        </header>
    )
}

export default Header;
