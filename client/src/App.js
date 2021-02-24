import React, {lazy, Suspense} from "react";

import "./App.css";
import Spinner from './components/spinner/Spinner'

import {Route, Switch} from 'react-router-dom'

const Header = lazy(()=>import('./components/header/Header'))
const Footer = lazy(()=>import('./components/footer/Footer'))
const Home = lazy(()=>import('./pages/homePage/Home'))
const Shop = lazy(()=>import('./pages/shopPage/Shop'))
const ScrollToTop = lazy(()=>import('./components/scroll/ScrollToTop'))
const Collection = lazy(()=>import('./pages/collectionPage/Collection'))
const Item = lazy(()=>import('./pages/itemPage/Item'))
const About = lazy(()=>import('./pages/aboutPage/About'))
const Checkout = lazy(()=>import('./pages/checkoutPage/Checkout'))
const Terms = lazy(()=>import('./pages/termsPage/Terms'))
const Privacy = lazy(()=>import('./pages/privacyPage/Privacy'))
const Return = lazy(()=>import('./pages/returnPage/Return'))
const Faq = lazy(()=>import('./pages/faqPage/Faq'))
const Order = lazy(()=>import('./pages/orderPage/Order'))
const Contact = lazy(()=>import('./pages/contactPage/Contact'))

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Spinner/>}>
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
      </Suspense>
    </div>
  );
}


export default App;
