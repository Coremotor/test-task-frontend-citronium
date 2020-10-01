import React from "react";
import ProductCard from "./ProductCard";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    productListInner: {
        display: "grid",
        gridTemplateColumns: [
            ["1fr", "1fr", "1fr", "1fr", "1fr",]
        ],
        gridGap: 10,
        maxWidth: 1280,
        marginRight: "auto",
        marginLeft: "auto",
    }
})

const ProductList = () => {

    const classes = useStyles()
    return (
        <section className={classes.productListInner}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </section>
    )
}

export default ProductList;
