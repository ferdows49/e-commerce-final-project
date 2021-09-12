import AuthActionTypes from './AuthActionTypes'


const initialState = {
    user: {}
}

export const LogInReducer = (state=initialState, action) => {
    switch(action.type) {
        case AuthActionTypes.LOGIN: return {
            ...state,
            user: action.payload
        }
        default: return state;
    }
}

