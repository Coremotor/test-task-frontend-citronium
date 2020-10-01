import React from "react";
import {createUseStyles} from "react-jss";



const useStyles = createUseStyles({
    switchLangWrapper: {
        marginRight: 80,
    }
})

const SwitchLang = () => {

    const classes = useStyles()

    return (
        <div className={classes.switchLangWrapper}>
            <button>ru</button>
            <button>en</button>
        </div>
    )
}

export default SwitchLang;
