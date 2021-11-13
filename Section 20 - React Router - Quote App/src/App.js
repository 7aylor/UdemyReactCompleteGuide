import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes/>
        </Route>
        <Route path="/new-quote" exact>
          <AddQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
