import React from "react";
import {createUseStyles} from "react-jss";
import {useDispatch, useSelector} from "react-redux";
import {onLangBtnClick} from "../../store/actionCreators/actionCreators";
import {IStore} from "../../interfaces/interfaces";

const useStyles = createUseStyles({
    switchLangWrapper: {
        marginRight: 80,
    },
    btnActive: {
        border: [
            ['1px', 'solid', 'red']
        ]
    }
})

const SwitchLang = () => {

    const lang = useSelector((state: IStore) => state.lang)
    const dispatch = useDispatch()

    const classes = useStyles()

    return (
        <div className={classes.switchLangWrapper}>
            <button className={lang === 'ru' ? classes.btnActive : undefined} onClick={() => dispatch(onLangBtnClick('ru'))}>ru</button>
            <button className={lang === 'en' ? classes.btnActive : undefined} onClick={() => dispatch(onLangBtnClick('en'))}>en</button>
        </div>
    )
}

export default SwitchLang;
