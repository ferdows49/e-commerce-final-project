import { Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import ProductList from "./pages/Product List/ProductList";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product-list">
          <ProductList />
        </Route>
        <Route path="/account">
          <Auth />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
