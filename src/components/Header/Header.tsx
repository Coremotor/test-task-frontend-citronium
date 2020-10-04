import React from "react";
import SwitchLang from "./SwitchLang";
import Basket from "./BasketLink";
import {createUseStyles} from 'react-jss'

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
        margin: {
            top: 0,
            right: "auto",
            bottom: 0,
            left: "auto",
        },
    },
    headerTitle: {
        marginRight: "auto",
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
                <h1 className={classes.headerTitle}>Market</h1>
                <SwitchLang/>
                <Basket/>
            </div>
        </header>
    )
}

export default Header;
