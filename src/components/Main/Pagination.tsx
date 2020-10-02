import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    list: {
        maxWidth: 1280,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        listStyle: "none",
        margin: {
            top: 0,
            right: "auto",
            bottom: 0,
            left: "auto",
        }
    },
    item: {
        marginRight: 10,
        "&:first-child": {
            border: "none",
        },
        "&:last-child": {
            border: "none",
        }
    },
})

const Pagination = () => {

    const classes = useStyles()

    return (
        <ul className={classes.list}>
            <li className={classes.item}>
                <button>Back</button>
            </li>
            <li className={classes.item}>
                <button>1</button>
            </li>
            <li className={classes.item}>
                <button>2</button>
            </li>
            <li className={classes.item}>
                <button>3</button>
            </li>
            <li className={classes.item}>...</li>
            <li className={classes.item}>
                <button>Last</button>
            </li>
            <li className={classes.item}>
                <button>Forward</button>
            </li>
        </ul>
    )
}

export default Pagination;
