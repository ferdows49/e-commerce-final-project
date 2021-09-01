import React, { useState } from "react";
import "./Auth.css";
import HeaderImage from "../../assets/images/header/image1.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NavBar from "../../components/NavBar/NavBar";

const Auth = () => {
  const [indicator, setIndicator] = useState("login");
  return (
    <div>
      <div className="account-page">
        <div className="container">
          <NavBar />
          <div className="row">
            <div className="col-2">
              <img src={HeaderImage} alt=""></img>
            </div>
            <div className="col-2">
              {indicator === "login" ? (
                <div className="form-container left">
                  <div className="form-btn">
                    <span onClick={() => setIndicator("login")}>Login</span>
                    <span onClick={() => setIndicator("signup")}>Sign Up</span>
                    <hr className="indicator-left" />
                  </div>
                  <SignIn />
                </div>
              ) : (
                <div className="form-container right">
                  <div className="form-btn">
                    <span onClick={() => setIndicator("login")}>Login</span>
                    <span onClick={() => setIndicator("signup")}>Sign Up</span>
                    <hr className="indicator-right" />
                    <SignUp />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
