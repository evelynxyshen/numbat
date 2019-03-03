import React from 'react';
import Loadable from 'react-loadable';
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const AsyncComponent = Loadable({
  loader: () => import("./AsyncComponent"),
  loading: () => <div>loading...</div>,
  modules: ['0']
});

export default class Layout extends React.Component {
  /* ... */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            React test app
          </p>
        </header>
        <div>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact </Link>
        </div>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
          <Route path="/contact" exact component={ Contact } />
        </Switch>
        <AsyncComponent/>
      </div>
    );
  }
}
