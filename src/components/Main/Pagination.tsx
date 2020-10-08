import React from "react";
import {createUseStyles} from "react-jss";
import {useDispatch, useSelector} from "react-redux";
import {IProduct, IStore} from "../../interfaces/interfaces";
import {setCurrentPage, setCurrentPageProducts} from "../../store/actionCreators/actionCreators";
import {RENDER_PAGE_QUANTITY} from "../../constants";

const useStyles = createUseStyles({
    list: {
        maxWidth: 1280,
        display: "flex",
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
    const products = useSelector((state: IStore) => state.products)
    const currentPage: number = useSelector((state: IStore) => state.currentPage)

    const pagesQuantity: number = Math.ceil(products.length / RENDER_PAGE_QUANTITY)
    const pagesArray: number[] = []
    for (let i = 1; i <= pagesQuantity; i++) {
        pagesArray.push(i)
    }

    function buildArrayProductsForShowOnPage(currentPage: number, RENDER_PAGE_QUANTITY: number, products: IProduct[]) {
        const showProductsArray: IProduct[] = []
        let endOfPageCount = currentPage * RENDER_PAGE_QUANTITY
        for (let i = (endOfPageCount - (RENDER_PAGE_QUANTITY)); i < endOfPageCount; i++) {
            if (products[i]) {
                showProductsArray.push(products[i])
            } else {
                break
            }
        }
        return showProductsArray
    }
    //TODO: скорее всего переносить в другую компоненту
    dispatch(setCurrentPageProducts(buildArrayProductsForShowOnPage(currentPage, RENDER_PAGE_QUANTITY, products)))

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
                                        //TODO: разобраться с варнингом в консоли при диспатче
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
