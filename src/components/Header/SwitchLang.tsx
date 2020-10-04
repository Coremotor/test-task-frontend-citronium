import React from "react";
import {createUseStyles} from "react-jss";
import {useDispatch} from "react-redux";
import {onLangBtnClick} from "../../store/actionCreators/actionCreators";

const useStyles = createUseStyles({
    switchLangWrapper: {
        marginRight: 80,
    }
})

const SwitchLang = () => {

    const dispatch = useDispatch()

    const classes = useStyles()

    return (
        <div className={classes.switchLangWrapper}>
            <button onClick={() => dispatch(onLangBtnClick('ru'))}>ru</button>
            <button onClick={() => dispatch(onLangBtnClick('en'))}>en</button>
        </div>
    )
}

export default SwitchLang;
