import React from "react";
import {createUseStyles} from "react-jss";
import {useDispatch, useSelector} from "react-redux";
import {onLangBtnClick} from "../../store/actionCreators/actionCreators";
import {IStore} from "../../interfaces/interfaces";

const useStyles = createUseStyles({
    switchLangWrapper: {
        marginRight: 80,
    },
    btn: {
        '&:first-child': {
            marginRight: 10
        }
    },
    btnActive: {
        boxShadow: [
            [0, 0, 6, 2, 'darkgray']
        ],
        '&:first-child': {
            marginRight: 10
        }
    }
})

const SwitchLang = () => {

    const lang = useSelector((state: IStore) => state.lang)
    const dispatch = useDispatch()

    const classes = useStyles()

    return (
        <div className={classes.switchLangWrapper}>
            <button
                className={lang === 'ru' ? classes.btnActive : classes.btn}
                onClick={() => dispatch(onLangBtnClick('ru'))}
            >рус
            </button>

            <button
                className={lang === 'en' ? classes.btnActive : classes.btn}
                onClick={() => dispatch(onLangBtnClick('en'))}
            >en
            </button>
        </div>
    )
}

export default SwitchLang;
