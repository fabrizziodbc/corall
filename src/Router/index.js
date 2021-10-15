import { Home } from "../containers/Home";
import { About } from "../containers/About";
import { ContactPage } from "../containers/ContactPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Solutions } from "../containers/Solutions";
import ScrollToTop from "../components/ScrollToTop";

const Router = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/conocenos" component={About} />
        <Route exact path="/contacto" component={ContactPage} />
        <Route exact path="/soluciones" component={Solutions} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export { Router };
