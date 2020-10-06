import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    footer: {
        backgroundColor: "gray",
    },
    footerInner: {
        maxWidth: 1280,
        color: "white",
        fontWeight: 700,
        fontSize: 16,
        textAlign: "center",
        padding: {
            top: 30,
            right: 10,
            bottom: 30,
            left: 10
        },
        marginRight: "auto",
        marginLeft: "auto",
    }
})

const Footer = () => {

    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <div className={classes.footerInner}>Footer</div>
        </footer>
    )
}

export default Footer;
