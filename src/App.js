import React from "react";
import "./App.css";
import Header from "./app/components/Header";
import Home from "./app/pages/Home";
import Detail from "./app/pages/Detail";
import Login from "./app/pages/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
