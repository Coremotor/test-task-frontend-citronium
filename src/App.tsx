import React from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Basket from "./components/Basket/Basket"
import Form from "./components/Form/Form"
import {IntlProvider} from 'react-intl'
import Russian from './lang/russian.json'
import English from './lang/english.json'
import {useSelector} from "react-redux"
import {IStore} from "./interfaces/interfaces"

function App() {

    let locale = useSelector((state: IStore) => state.lang)
    let lang: any
    locale === 'ru' ? lang = Russian : lang = English

    return (
        <IntlProvider messages={lang} locale={locale}>
            <div className="App">
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
