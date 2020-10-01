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
    }
})

const ProductCard = () => {

    const classes = useStyles()

    return (
        <article className={classes.productCard}>
            <h2 className={classes.productCardTitle}>Product name</h2>
            <img src="https://placekitten.com/200/250" alt="Изображение товара"/>
            <p>Product description</p>
            <div className={classes.productCardInner}>
                <span>Price</span>
                <button>Add</button>
            </div>
        </article>
    )
}

export default ProductCard;


// const ProductItem = {
//     id: 1,
//     productName: 'Product',
//     productImgUrl: '/#',
//     productDescription: 'Description',
//     productPrice: {
//         RUB: 10,
//         USD: 60,
//         //использовать функцию конвертации при выводе на клиенте вместо хардкодинга цены в разных валютах
//     },
//     productQuantity: 0
// }



