import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ListProducts from "./pages/home/list-product";
import ProductDetail from "./pages/home/product-detail";
import Profile from "./pages/home/profile";
import Error from "./pages/home/error404";

//Lazy load
//const ListProducts = lazy(() =>import('./pages/home/list-product'));
//const ProudctDetail = lazy(() =>import(./pages/home/product-detail'))



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route path="/error404" component={Error} />
        <Route exact path="/" component={ListProducts} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/profile" component ={Profile}/>
        <Redirect to="/error404" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
