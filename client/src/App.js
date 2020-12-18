import React from "react";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./App.css";
import Home from './pages/Home'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Switch>
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
