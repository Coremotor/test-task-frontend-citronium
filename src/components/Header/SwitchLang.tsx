import React from "react";
import {createUseStyles} from "react-jss";
import {useDispatch, useSelector} from "react-redux";
import {onLangBtnClick} from "../../store/actionCreators/actionCreators";
import {IStore} from "../../interfaces/interfaces";

const useStyles = createUseStyles({
    switchLangWrapper: {
        marginRight: 80,
    },
    '@media (max-width: 650px)': {
        switchLangWrapper: {
            marginRight: 20
        }
    },
    btn: {
        '&:first-child': {
            marginRight: 10
        }
    },
})

const SwitchLang = () => {

    const lang: string = useSelector((state: IStore) => state.lang)
    const dispatch = useDispatch()

    const classes = useStyles()

    return (
        <div className={classes.switchLangWrapper}>
            <button
                className={classes.btn}
                onClick={() => dispatch(onLangBtnClick('ru'))}
                disabled={lang === 'ru'}
            >рус
            </button>

            <button
                className={classes.btn}
                onClick={() => dispatch(onLangBtnClick('en'))}
                disabled={lang === 'en'}
            >en
            </button>
        </div>
    )
}

export default SwitchLang;
