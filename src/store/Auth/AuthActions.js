import axios from "axios";
import BASE_URL from "../../lib/BaseUrl";
import AuthActionTypes from "./AuthActionTypes";

export const LoginAction = (user) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/signin`, {
    email: user.email,
    password: user.password,
  });
  dispatch({ type: AuthActionTypes.LOGIN, payload: response.data });
};

export const SignUpAction = ({email, username, password}) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/signup`, {
    email: email,
    username: username,
    password: password,
    firstname: "",
    lastname: "",
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  });
  dispatch({ type: AuthActionTypes.SIGNUP, payload: response.data });
};
