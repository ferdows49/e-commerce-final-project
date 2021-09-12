import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import "./Cart.css";
import image from "../../assets/images/product-1.jpg";
import { GetCartProducts } from "../../store/Cart/CartActions";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const cartProducts = useSelector((store) => store.cartProducts.cartProducts);
  const productList = useSelector((store) => store.productList.products);
  console.log(cartProducts);
  const userId = 1;
  const cartProductId = cartProducts.map((cartProduct) =>
    cartProduct.userId === userId
      ? cartProduct.products.map((product) => product.productId)
      : null
  );

  console.log(cartProductId)

  const dispatch = useDispatch();

  const cartProduct = productList.map(
    (singleProduct) => singleProduct.id === cartProductId && singleProduct
  );

  console.log(cartProduct);

  useEffect(() => {
    dispatch(GetCartProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <NavBar />
      <div className="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {/* {cartProducts.map()} */}
        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$230.00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
