import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Footer.css";
import logo from '../../assets/images/nav/logo.png'

const StyledNavLink = styled(NavLink)`
  color: #8a8a8a;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="footer-col-2">
              <img src={logo} alt="" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="footer-col-3">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <StyledNavLink to="">coupons</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="">Blog post</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="">Return policy</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="">join Affiliate</StyledNavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h4>Follow us</h4>
            <ul>
              <li>
                <StyledNavLink to="">Facebook</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="">Twitter</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="">YouTube</StyledNavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
