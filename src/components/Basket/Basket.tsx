import React from "react";

const Basket = () => {
    return (
        <section>
            <h2>Basket</h2>
            <ul>
                <li>
                    <span>Номер по порядку</span>
                    <span>Product name</span>
                    <span>Product description</span>
                    <span>Product price</span>

                    <button>Del</button>
                    <span>Product count</span>
                    <button>Add</button>

                    <span>Summary price</span>
                </li>
            </ul>

            <span>All product count</span>
            <span>All summary price</span>

            <a href="#">Make an order</a>
        </section>
    )
}

export default Basket;
