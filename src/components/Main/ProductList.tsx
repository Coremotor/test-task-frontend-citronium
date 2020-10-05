import React from "react";
import ProductCard from "./ProductCard";
import {createUseStyles} from "react-jss";
import {shallowEqual, useSelector} from "react-redux";
import {IStore} from '../../interfaces/interfaces';

const useStyles = createUseStyles({
    productList: {
        display: "grid",
        gridTemplateColumns: [
            ["1fr", "1fr", "1fr", "1fr", "1fr",]
        ],
        gridGap: 10,
        maxWidth: 1280,
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 20
    }
})

const ProductList = () => {

    const products = useSelector((state: IStore) => state.products, shallowEqual)
    const classes = useStyles()

    return (
        <section className={classes.productList}>
            {
                products.map((product) => {
                    return <ProductCard
                        key={product.id}
                        {...product}
                    />
                })
            }
        </section>
    )
}

export default ProductList;
