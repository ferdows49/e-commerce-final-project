import React, { useState } from "react";
import "./SignIn.css";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/Auth/AuthActions";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    dispatch(fetchLogin(user))
  };

  return (
    <Form onSubmit={handleSubmit} className="login">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button type="submit" className="btn">
        Log In
      </Button>
      <NavLink to="">Forgot Password</NavLink>
    </Form>
  );
};

export default SignIn;
