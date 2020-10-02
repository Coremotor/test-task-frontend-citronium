import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    productCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: [
            [1, 'solid', 'blue']
        ],
        padding: 10,
        backgroundColor: "white",
    },
    productCardInner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
    },
    productCardTitle: {
        marginBottom: 20,
    },
    img: {
        width: 200,
        height: 250,
    }
})

const ProductCard = () => {

    const classes = useStyles()

    return (
        <article className={classes.productCard}>
            <h2 className={classes.productCardTitle}>Product name</h2>
            <img className={classes.img} src="https://placekitten.com/200/250" alt="Изображение товара"/>
            <p>Product description</p>
            <div className={classes.productCardInner}>
                <span>Price</span>
                <button>Add</button>
            </div>
        </article>
    )
}

export default ProductCard;




