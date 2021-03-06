import React from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    main: {
        height: "100000vh",
        backgroundColor: "#eef0f6",
        padding: {
            top: 20,
            bottom: 20,
        }
    }
})

const Main = () => {

    const classes = useStyles()

    return (
        <main className={classes.main}>
            <ProductList/>
            <Pagination/>
        </main>
    )
}

export default Main;
