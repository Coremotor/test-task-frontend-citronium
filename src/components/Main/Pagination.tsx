import React from "react";
import {createUseStyles} from "react-jss";
import {useDispatch, useSelector} from "react-redux";
import {IProduct, IStore} from "../../interfaces/interfaces";
import {setCurrentPage} from "../../store/actionCreators/actionCreators";
import {RENDER_PAGE_QUANTITY} from "../globalConstants/globalConstants";

const useStyles = createUseStyles({
    list: {
        maxWidth: 1280,
        display: "flex",
        flexWrap: 1,
        alignItems: "center",
        justifyContent: "center",
        listStyle: "none",
        padding: {
            right: 10,
            left: 10
        },
        margin: {
            top: 0,
            right: "auto",
            bottom: 0,
            left: "auto",
        }
    },
    item: {
        marginRight: 10,
    },
})

const Pagination = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const products: IProduct[] = useSelector((state: IStore) => state.products)
    const currentPage: number = useSelector((state: IStore) => state.currentPage)

    const pagesQuantity: number = Math.ceil(products.length / RENDER_PAGE_QUANTITY)
    const pagesArray: number[] = []
    for (let i = 1; i <= pagesQuantity; i++) {
        pagesArray.push(i)
    }

    return (
        <ul className={classes.list}>
            {
                pagesArray.map((page, index) => {
                    return (
                        <li
                            key={index}
                            className={classes.item}>
                            <button
                                onClick={
                                    () => {
                                        dispatch(setCurrentPage(page))
                                    }
                                }
                                disabled={page === currentPage}
                            >{page}</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Pagination;
