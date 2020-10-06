import React from 'react';
import {useFormik} from 'formik';
import {createUseStyles} from "react-jss";
import {useHistory} from "react-router-dom";
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
    error: {
        backgroundColor: "red",
        color: "white",
        padding: 10,
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
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fio: '',
            phoneNumber: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            dispatch(onSubmitForm([]))
            history.push('/')
        },
    });
    return (
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
                    placeholder='Enter first and last name'
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
                    placeholder='Enter email'
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
                    placeholder='Enter phone number'
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className={classes.error}>{formik.errors.phoneNumber}</div>
                ) : null}

                <button
                    className={classes.formBtn}
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                >Make an order
                </button>
            </form>
        </div>
    );
};

export default Form;