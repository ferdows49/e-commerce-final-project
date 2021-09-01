import axios from "axios"
import BASE_URL from '../../lib/BaseUrl'
import AuthActionTypes from './AuthActionTypes'


export const fetchLogin = (user) => async (dispatch) => {
    const response = await axios.post(`${BASE_URL}/signin`, {user})
    dispatch({type: AuthActionTypes.LOGIN, payload: response.data})
}