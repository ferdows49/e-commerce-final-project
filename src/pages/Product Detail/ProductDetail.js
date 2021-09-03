import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import { fetchProductDetail } from "../../store/Product Detail/ProductDetailActions";
import { useParams } from "react-router-dom";
import { AddToCart } from "../../store/Cart/CartActions";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const product = useSelector((store) => store.productDetails.currentProduct);
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  const handleClick = () => {
    const item = {
      id: productId,
      quantity: quantity
    }
    dispatch(AddToCart(item))
  }

  return (
    <div className="container">
      <NavBar />
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img src={product.image} alt="" width="100%" />
          </div>
          <div className="col-2">
            <p>Home / T-shirt</p>
            <h1>{product.title}</h1>
            <h4>${product.price}</h4>
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
            <br />
            <h3>Product Detail</h3>
            <br />
            <p>{product.description}</p>
            <h4>Stock 120</h4>
            <Button className="cart-btn" onClick={handleClick}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
