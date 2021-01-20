import React from "react";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./App.css";
import Home from './pages/homePage/Home'
import Shop from './pages/shopPage/Shop'
import ScrollToTop from './components/scroll/ScrollToTop'
import Collection from './pages/collectionPage/Collection'
import Item from './pages/itemPage/Item'
import About from './pages/aboutPage/About'
import Checkout from './pages/checkoutPage/Checkout'
import Terms from './pages/termsPage/Terms'
import Privacy from './pages/privacyPage/Privacy'
import Return from './pages/returnPage/Return'
import Faq from './pages/faqPage/Faq'
import Order from './pages/orderPage/Order'
import Contact from './pages/contactPage/Contact'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Switch>
      <Route path='/shop/:CollectionId/:ItemId'>
          <ScrollToTop />
          <Header/>
            <Item/>
          <Footer/>
        </Route>
      < Route path='/shop/:CollectionId'>
          <ScrollToTop />
          <Header/>
            <Collection />
          <Footer/>
        </Route>
        <Route path='/order'>
          <ScrollToTop />
          <Header/>
            <Order/>
          <Footer/>
        </Route>
        <Route path='/checkout'>
          <ScrollToTop />
          <Header/>
            <Checkout/>
          <Footer/>
        </Route>
        <Route path='/shop'>
          <ScrollToTop />
          <Header/>
            <Shop/>
          <Footer/>
        </Route>
        <Route path='/frequently-asked-questions'>
          <ScrollToTop />
          <Header/>
            <Faq/>
          <Footer/>
        </Route>
        <Route path='/contact'>
          <ScrollToTop />
          <Header/>
            <Contact/>
          <Footer/>
        </Route>
        <Route path='/return-policy'>
          <ScrollToTop />
          <Header/>
            <Return/>
          <Footer/>
        </Route>
        < Route path='/privacy-policy'>
          <ScrollToTop />
          <Header/>
            <Privacy/>
          <Footer/>
        </Route>
        < Route path='/terms-and-conditions'>
          <ScrollToTop />
          <Header/>
            <Terms/>
          <Footer/>
        </Route>
        < Route path='/about'>
          <ScrollToTop />
          <Header/>
            <About/>
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
