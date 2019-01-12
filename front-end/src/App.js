import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
