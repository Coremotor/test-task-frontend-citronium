import React from "react";
import SwitchLang from "./SwitchLang";
import Basket from "./BasketLink";
import {createUseStyles} from 'react-jss'
import {NavLink} from "react-router-dom";

import {FormattedMessage} from 'react-intl'

const useStyles = createUseStyles({
    header: {
        color: 'white',
        backgroundColor: 'gray',
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
        '&:active': {
            color: "white"
        }
    },
    myButton: {
        color: 'green',
        margin: {
            // jss-plugin-expand gives more readable syntax
            top: 5, // jss-plugin-default-unit makes this 5px
            right: 0,
            bottom: 0,
            left: '1rem'
        },
        '& span': {
            // jss-plugin-nested applies this to a child span
            fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
        }
    },
    myLabel: {
        fontStyle: 'italic'
    }
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
