import React from "react";
import {createUseStyles} from "react-jss";
import {FormattedMessage} from "react-intl";

const useStyles = createUseStyles({
    footer: {
        backgroundColor: "#094d74",
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
            <div className={classes.footerInner}>
                <FormattedMessage
                    id='title'
                    defaultMessage='Test App for Citronium'
                />
            </div>
        </footer>
    )
}

export default Footer;
