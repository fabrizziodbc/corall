import { Home } from "../containers/Home";
import { Contact } from "../containers/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "../components/Layout";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        
      </Switch>
    </Layout>
  </BrowserRouter>
);
export { Router };
