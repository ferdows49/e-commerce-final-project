import AuthActionTypes from './AuthActionTypes'


const initialState = {
    token: {}
}

export const LoginReducer = (state=initialState, action) => {
    switch(action.type) {
        case AuthActionTypes.LOGIN: return {
            ...state,
            token: action.payload
        }
        default: return state;
    }
}