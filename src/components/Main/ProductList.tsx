import React from "react";
import ProductCard from "./ProductCard";
import {createUseStyles} from "react-jss";
import {useSelector} from "react-redux";
import {IProduct, IStore} from '../../interfaces/interfaces';
import {buildArrayProductsForShowOnPage} from "../../libs/buildArrayProductsForShowOnPage";
import {RENDER_ON_PAGE_PRODUCTS_QUANTITY} from "../globalConstants/globalConstants";

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

    const currentPage: number = useSelector((state: IStore) => state.currentPage)
    const products: IProduct[] = useSelector((state: IStore) => state.products)
    const classes = useStyles()

    //построение масива для отображения продуктов на странице
    const currentPageProducts: IProduct[] = buildArrayProductsForShowOnPage(currentPage, RENDER_ON_PAGE_PRODUCTS_QUANTITY, products)

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
