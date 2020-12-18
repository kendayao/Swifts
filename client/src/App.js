import React from "react";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./App.css";
import Home from './pages/homePage/Home'
import {Route, Switch} from 'react-router-dom'
import Shop from './pages/shopPage/Shop'
import ScrollToTop from './components/scroll/ScrollToTop'
import Collection from './pages/collectionPage/Collection'

function App() {
  return (
    <div className="app">
      <Switch>
      < Route path='/shop/:CollectionId'>
          <ScrollToTop />
          <Header/>
            <Collection />
          <Footer/>
        </Route>
        <Route path='/shop'>
          <ScrollToTop />
          <Header/>
            <Shop/>
          <Footer/>
        </Route>
        <Route path="/">
          <Header />
            <Home match/>
          <Footer/>
        </Route>
      </Switch>

    </div>
  );
}


export default App;
