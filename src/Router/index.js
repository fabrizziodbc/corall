import { Home } from "../containers/Home";
import { About } from "../containers/About";
import { Contact } from "../containers/Contact";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Solutions } from "../containers/Solutions";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/conocenos" component={About}/>
        <Route exact path="/contacto" component={Contact}/>
        <Route exact path="/soluciones" component={Solutions}/>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export { Router };
