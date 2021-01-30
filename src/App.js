import React from "react";
import { Fragment } from "react";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./static/index.scss"; // General Styles of the React App.
import { Home } from "./componentes/home/Home";
import CategoriesProvider from "./context/CategoriesContext";
import SearcherProvider from "./context/SearcherContext";
import { Category } from "./componentes/category/Category";
import PageProvider from "./context/PageContext";
import { Detail } from "./componentes/detail/Detail";

/*
imr = import React from 'react';
rafc = imr + sfc
sfc = Stateless Functional Component.
*/
const App = () => {
  return (
    <Fragment>
      <CategoriesProvider>
        <SearcherProvider>
          <PageProvider>
            <Router>
              <Navbar />
              <section className="all">
                <Switch>
                  <Route exact path="/home" component={() => <Home />} />
                  <Route exact path="/" component={() => <Home />} />
                  <Route
                    exact
                    path="/category"
                    render={() => <Category />}
                  />
                  <Route
                    exact
                    path="/:category/:id"
                    component={() => <Detail />}
                  />
                  <Redirect to="/home" />
                </Switch>
              </section>
            </Router>
          </PageProvider>
        </SearcherProvider>
      </CategoriesProvider>
    </Fragment>
  );
};

export default App;
