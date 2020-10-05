import React from "react";
import {createUseStyles} from "react-jss";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {onSubmitForm} from "../../store/actionCreators/actionCreators";

const useStyles = createUseStyles({
    formWrapper: {
        height: "1000vh",
        marginTop: 50,
        marginBottom: 50,
        marginRight: "auto",
        marginLeft: "auto",
    },
    form: {
        width: 300,
        display: "flex",
        flexDirection: "column",
        boxShadow: [
            [0, 0, 6, 2, 'gray']
        ],
        padding: 20,
    },
    fieldLabel: {
        visibility: "hidden",
        width: 0,
        height: 0,
    },
    fioField: {
        padding: 10,
        marginBottom: 20
    },
    emailField: {
        padding: 10,
        marginBottom: 20
    },
    phoneField: {
        padding: 10,
        marginBottom: 20
    },
    formBtn: {
        alignSelf: "center",
    },
})

const Form = () => {

    const dispatch = useDispatch()

    const classes = useStyles();
    const history = useHistory()
    const submitHandler = (event: any) => {
        event.preventDefault()
        dispatch(onSubmitForm([]))
        history.push('/')
    }

    return (
        <div className={classes.formWrapper}>
            <form onSubmit={submitHandler} className={classes.form}>
                <label className={classes.fieldLabel} htmlFor="fio">Фамилия Имя Отчество</label>
                <input className={classes.fioField} id="fio" name="fio" type="text" placeholder="Фамилия Имя Отчество"/>

                <label className={classes.fieldLabel} htmlFor="email">Адрес электронной почты</label>
                <input className={classes.emailField} id="email" name="email" type="email"
                       placeholder="Адрес электронной почты"/>

                <label className={classes.fieldLabel} htmlFor="phone">Номер телефона</label>
                <input className={classes.phoneField} id="phone" name="phone" type="tel" placeholder="Номер телефона"/>

                <button className={classes.formBtn} type="submit">Send</button>
            </form>
        </div>
    )
}

export default Form;
