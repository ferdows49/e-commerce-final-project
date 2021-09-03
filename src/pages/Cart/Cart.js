import React, {useState, useEffect} from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import "./Cart.css";
import image from "../../assets/images/product-1.jpg";
import { GetCartProducts } from "../../store/Cart/CartActions";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const cartProducts = useSelector(store => store.cartProducts.cartProducts)
  console.log(cartProducts)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(GetCartProducts())
  }, [dispatch])

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
          <tr>
            <td>
              <div className="cart-info">
                <img src={image} alt="" height="150px" />
                <div className="product-info">
                  <p>product name</p>
                  <small>$50.25</small>
                  <br />
                  <Button>Remove</Button>
                </div>
              </div>
            </td>
            <td>
              <Button
                className="btn inc"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <p className="quantity">{quantity}</p>
              <Button
                className="btn dec"
                onClick={() => {
                  if (quantity === 1) {
                    return;
                  } else {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </Button>
            </td>
            <td>$50.25</td>
          </tr>
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
