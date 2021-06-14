import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Home, Order } from "./pages";
import { Layout } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pizza">
            <Order />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
