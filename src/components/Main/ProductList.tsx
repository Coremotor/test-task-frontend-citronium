import React from "react";
import ProductCard from "./ProductCard";
import {createUseStyles} from "react-jss";
import {useSelector} from "react-redux";
import {IStore} from '../../interfaces/interfaces';

const useStyles = createUseStyles({
    productList: {
        display: "grid",
        gridTemplateColumns: [
            ["1fr", "1fr", "1fr", "1fr", "1fr",]
        ],
        '@media (max-width: 1300px)': {
            gridTemplateColumns: [
                ["1fr", "1fr", "1fr", "1fr"]
            ]
        },
        '@media (max-width: 1100px)': {
            gridTemplateColumns: [
                ["1fr", "1fr", "1fr"]
            ]
        },
        '@media (max-width: 850px)': {
            gridTemplateColumns: [
                ["1fr", "1fr"]
            ]
        },
        '@media (max-width: 560px)': {
            gridTemplateColumns: [
                ["1fr"]
            ]
        },
        gridGap: 10,
        maxWidth: 1280,
        padding: {
            right: 10,
            left: 10
        },
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 20
    }
})

const ProductList = () => {

    const currentPageProducts = useSelector((state: IStore) => state.currentPageProducts)
    const classes = useStyles()

    return (
        <section className={classes.productList}>
            {
                currentPageProducts.map((currentPageProduct) => {
                    return <ProductCard
                        key={currentPageProduct.id}
                        {...currentPageProduct}
                    />
                })
            }
        </section>
    )
}

export default ProductList;
