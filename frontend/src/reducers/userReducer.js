import { userActionType } from "../actionTypes/userActionType"

const initialState ={
    loading: false,
    isAuthenticated: false,
    user: [],
    error: null
}

export const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case userActionType.LOGIN_REQUEST:
        case userActionType.REGISTER_USER_REQUEST:
        case userActionType.LOAD_USER_REQUEST:
        case userActionType.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userActionType.LOGIN_SUCCESS:
        case userActionType.REGISTER_USER_SUCCESS:
        case userActionType.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading : false,
                isAuthenticated: true,
                user: action.payload
            }
        case userActionType.LOGIN_FAIL:
        case userActionType.REGISTER_USER_FAIL:
        case userActionType.LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userActionType.LOGOUT_SUCCESS:
            return {
                ...initialState
            }

        case userActionType.LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        
        case userActionType.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default :
            return state
    }
}