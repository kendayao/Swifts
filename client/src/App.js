import React from "react";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./App.css";
import Home from './pages/homePage/Home'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shopPage/Shop'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/shop'>
          <Header/>
            <Shop/>
          <Footer/>
        </Route>
        <Route path="/">
          <Header />
            <Home/>
          <Footer/>
        </Route>
      </Switch>

    </div>
  );
}


export default App;
