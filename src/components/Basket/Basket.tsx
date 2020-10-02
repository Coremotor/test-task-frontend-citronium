import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    basket: {
        maxWidth: 1280,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 30,
    },
    list: {
        listStyle: "none",
        marginBottom: 40,
    },
    item: {
        display: "flex",
        marginBottom: 20,
    },
    number: {
        marginRight: 10,
    },
    name: {
        marginRight: 10,
    },
    description: {
        marginRight: 10,
    },
    price: {
        marginRight: "auto",
    },
    delBtn: {
        marginRight: 10,
    },
    productCount: {
        marginRight: 10,
    },
    addBtn: {
        marginRight: 30,
    },
    summaryPrice: {
        marginRight: 10,
    },
    wrapper: {
        width:"80%",
        display:"flex",
        alignItems: "center",
        justifyContent: "space-around",
        alignSelf: "center",
    },
    link: {
        alignSelf: "center",
        marginBottom: 40,
    }
})

const Basket = () => {

    const classes = useStyles()

    return (
        <section className={classes.basket}>
            <h2>Basket</h2>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <span className={classes.number}>1.</span>
                    <span className={classes.name}>Product name</span>
                    <span className={classes.description}>Product description</span>
                    <span className={classes.price}>Product price</span>

                    <button className={classes.delBtn}>Del</button>
                    <span className={classes.productCount}>Product count</span>
                    <button className={classes.addBtn}>Add</button>

                    <span className={classes.summaryPrice}>Summary price</span>
                </li>

                <li className={classes.item}>
                    <span className={classes.number}>1.</span>
                    <span className={classes.name}>Product name</span>
                    <span className={classes.description}>Product description</span>
                    <span className={classes.price}>Product price</span>

                    <button className={classes.delBtn}>Del</button>
                    <span className={classes.productCount}>Product count</span>
                    <button className={classes.addBtn}>Add</button>

                    <span className={classes.summaryPrice}>Summary price</span>
                </li>

                <li className={classes.item}>
                    <span className={classes.number}>1.</span>
                    <span className={classes.name}>Product name</span>
                    <span className={classes.description}>Product description</span>
                    <span className={classes.price}>Product price</span>

                    <button className={classes.delBtn}>Del</button>
                    <span className={classes.productCount}>Product count</span>
                    <button className={classes.addBtn}>Add</button>

                    <span className={classes.summaryPrice}>Summary price</span>
                </li>
            </ul>
            <div className={classes.wrapper}>
                <span>All product count</span>
                <span>All summary price</span>
            </div>

            <a className={classes.link} href="#">Make an order</a>
        </section>
    )
}

export default Basket;
