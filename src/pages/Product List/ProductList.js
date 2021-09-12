import React, { useEffect } from "react";
import "./ProductList.css";
import NavBar, { StyledNavLink } from "../../components/NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductList } from "../../store/Product List/ProductListActions";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

const ProductList = () => {
  const products = useSelector((state) => state.productList.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <div className="container">
      <NavBar />
      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Sort by default</option>
            <option>Sort by price</option>
            <option>Sort by category</option>
          </select>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-4" key={product.id}>
              <StyledNavLink to={`/product-detail/${product.id}`}>
                <div>
                  <img src={product.image} alt="" />
                </div>
                <div className="title">
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                </div>
                <Button className="btn">Buy Now</Button>
              </StyledNavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
