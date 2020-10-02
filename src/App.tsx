import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Main/>*/}
      {/*<Basket/>*/}
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
