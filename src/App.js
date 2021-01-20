import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppDemo from "./pages/AppDemo";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/AppDemo" component={AppDemo} exact />
        <Route path={"/Category"} component={Category} exact />
      </Switch>
    </Router>
  );
}

export default App;
