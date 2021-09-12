import AuthActionTypes from "./AuthActionTypes";

const initialState = {
    newUser: {}
};

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGNUP:
      return {
        ...state,
        newUser: action.payload
      };
    default:
      return state;
  }
};
