import React, {useState} from 'react';
import {useFormik} from 'formik';
import {createUseStyles} from "react-jss";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {onSubmitForm} from "../../store/actionCreators/actionCreators";
import {FormattedMessage} from "react-intl";
import {useIntl} from 'react-intl';

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
    error: {
        backgroundColor: "red",
        color: "white",
        padding: 5,
        marginTop: -20,
        marginBottom: 10,
        width: "fit-content"
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
    alert: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#094d74",
        opacity: 0.7,
        color: "white",
        fontSize: 20,
        textAlign: "center",
        '@media (max-width: 560px)': {
           fontSize: 14,
        },
    }
})

const validate = (values: any) => {
    const errors: any = {};
    if (!values.fio) {
        errors.fio = 'Required';
    } else if (values.fio.length > 15) {
        errors.fio = 'Must be 15 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
    } else if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(values.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number';
    }

    return errors;
};

const Form = () => {

    const [alertShow, setAlertShow] = useState(false)

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const intl = useIntl()

    const formik = useFormik({
        initialValues: {
            fio: '',
            phoneNumber: '',
            email: '',
        },
        validate,
        onSubmit: () => {
            //TODO: отправить values на сервак
            //TODO: ресетнуть форму
            //alert(JSON.stringify(values, null, 2));
            dispatch(onSubmitForm([]))
            setAlertShow(true)
            setTimeout(() => setAlertShow(false), 5000)
            setTimeout(() => history.push('/'), 5000)
        },
    })

    return (
        <>
            {
                alertShow &&
                <div className={classes.alert}>
                    <span>
                        <FormattedMessage
                            id='formAlertMessage'
                            defaultMessage='The order has been placed, a representative of the company will contact you shortly :)'
                        />
                    </span>

                    <p>
                        {
                            //TODO: сделать счетчик таймера, если хватит времени
                        }
                        <FormattedMessage
                            id='formAlertTimeMessage'
                            defaultMessage='The message will disappear automatically after 5 seconds'
                        />
                    </p>
                </div>
            }

            <div className={classes.formWrapper}>
                <form onSubmit={formik.handleSubmit} className={classes.form}>
                    <label className={classes.fieldLabel} htmlFor="fio">First and second name</label>
                    <input
                        className={classes.fioField}
                        id="fio"
                        name="fio"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fio}
                        placeholder={intl.formatMessage({id: 'nameSurnamePlaceholder'})}
                    />
                    {formik.touched.fio && formik.errors.fio ? (
                        <div className={classes.error}>{formik.errors.fio}</div>
                    ) : null}

                    <label className={classes.fieldLabel} htmlFor="email">Email Address</label>
                    <input
                        className={classes.emailField}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder={intl.formatMessage({id: 'emailPlaceholder'})}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={classes.error}>{formik.errors.email}</div>
                    ) : null}

                    <label className={classes.fieldLabel} htmlFor="phoneNumber">Phone number</label>
                    <input
                        className={classes.phoneField}
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        placeholder={intl.formatMessage({id: 'phoneNumberPlaceholder'})}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div className={classes.error}>{formik.errors.phoneNumber}</div>
                    ) : null}

                    <button
                        className={classes.formBtn}
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                    >
                        <FormattedMessage
                            id='makeAnOrder'
                            defaultMessage='Make an order'
                        />
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form;
