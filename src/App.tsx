import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Basket from "./components/Basket/Basket";
import Form from "./components/Form/Form";


function App() {
    return (
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
    );
}

export default App;
