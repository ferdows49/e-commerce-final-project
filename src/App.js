import { Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import ProductList from "./pages/Product List/ProductList";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import Cart from "./pages/Cart/Cart";

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
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
        <Route path="/account">
          <Auth />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
