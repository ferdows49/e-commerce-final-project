import React from "react";
import "./NavBar.css";
import logo from "../../assets/images/nav/logo.png";
import cart from "../../assets/images/nav/cart.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: #484848;
  text-decoration: none;
`

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <nav>
        <ul>
          <li><StyledNavLink to="">Home</StyledNavLink></li>
          <li><StyledNavLink to="/product-list">Products</StyledNavLink></li>
          <li><StyledNavLink to="">About</StyledNavLink></li>
          <li><StyledNavLink to="">Contacts</StyledNavLink></li>
          <li><StyledNavLink to="/account">Account</StyledNavLink></li>
        </ul>
      </nav>
      <img src={cart} alt="cart" width="30px" height="30px" />
    </div>
  );
};

export default NavBar;
