import React, { useEffect } from "react";
import "./ProductList.css";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductList } from "../../store/Product List/ProductListActions";

const ProductList = () => {
  const products = useSelector((state) => state.productList.products);
  console.log(products);
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
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
