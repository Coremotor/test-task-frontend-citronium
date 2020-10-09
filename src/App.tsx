import React from 'react'
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Basket from "./components/Basket/Basket"
import Form from "./components/Form/Form"
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import {useSelector} from "react-redux"
import {IStore} from "./interfaces/interfaces"
import {createUseStyles} from "react-jss";
import Russian from './lang/russian.json'
import English from './lang/english.json'

const useStyles = createUseStyles({
    app: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
})

function App() {

    const classes = useStyles()

    let locale: string = useSelector((state: IStore) => state.lang)
    let lang: any
    locale === 'ru' ? lang = Russian : lang = English

    return (
        <IntlProvider messages={lang} locale={locale}>
            <div className={classes.app}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route component={Main} path='/' exact/>
                        <Route component={Basket} path='/basket'/>
                        <Route component={Form} path='/form'/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        </IntlProvider>
    );
}

export default App;
