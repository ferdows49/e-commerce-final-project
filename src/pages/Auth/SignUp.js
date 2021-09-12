import React, { useState } from "react";
import "./SignUp.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import { useDispatch } from "react-redux";
import { SignUpAction } from "../../store/Auth/AuthActions";

const SignUp = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      email: email,
      username: userName, 
      password: password
    }
    dispatch(SignUpAction(newUser))
  }

  return (
    <Form onSubmit={handleSubmit} className="signup">
      <Input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />
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
      <Button type="submit" >Sign Up</Button>
    </Form>
  );
};

export default SignUp;
