import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppDemo from "./pages/AppDemo";
import Category from "./pages/Category";
import RecipePage from "./components/Recipes/RecipePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/AppDemo" component={AppDemo} exact />
        <Route path="/Category" component={Category} exact />
        <Route path="/:id" component={RecipePage} />
      </Switch>
    </Router>
  );
}

export default App;
