import React from "react";

const Form = () => {
    return (
        <form>
            <label htmlFor="fio">Фамилия Имя Отчество</label>
            <input id="fio" name="fio" type="text"/>

            <label htmlFor="email">Адрес электронной почты</label>
            <input id="email" name="fio" type="email"/>

            <label htmlFor="phone">Адрес электронной почты</label>
            <input id="phone" name="fio" type="tel"/>

            <button type="submit">Send</button>
        </form>
    )
}

export default Form;
