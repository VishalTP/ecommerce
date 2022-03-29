import axios from "axios"
import { userActionType } from "../actionTypes/userActionType"

export const login = (email, password)=> async (dispatch)=>{
    try {
        dispatch({type: userActionType.LOGIN_REQUEST})

        const {data} = await axios.post("/api/v1/login", 
            {email, password},
            {headers: {"Content-Type": "application/json"}}    
        )
        dispatch({type: userActionType.LOGIN_SUCCESS, payload: data.user})
    } catch (error) {
        dispatch({type: userActionType.LOGIN_FAIL, payload: error.response.data.message})
    }
}

export const register = (userData)=> async (dispatch)=>{
    try {
        dispatch({type: userActionType.REGISTER_USER_REQUEST})

        const {data} = await axios.post("/api/v1/register", 
            userData,
            {headers: {"Content-Type": "multipart/form-data"}}    
        )
        dispatch({type: userActionType.REGISTER_USER_SUCCESS, payload: data.user})
    } catch (error) {
        dispatch({type: userActionType.REGISTER_USER_FAIL, payload: error.response.data.message})
    }
}

export const loadUser = ()=> async (dispatch)=>{
    try {
        dispatch({type: userActionType.LOAD_USER_REQUEST})

        const {data} = await axios("/api/v1/me")
        dispatch({type: userActionType.LOAD_USER_SUCCESS, payload: data.user})
    } catch (error) {
        dispatch({type: userActionType.LOAD_USER_FAIL, payload: error.response.data.message})
    }
}

export const logout = ()=> async (dispatch)=>{
    try {
        dispatch({type: userActionType.LOGOUT_REQUEST})

        await axios("/api/v1/logout")
        dispatch({type: userActionType.LOGOUT_SUCCESS})
    } catch (error) {
        dispatch({type: userActionType.LOGOUT_FAIL, payload: error.response.data.message})
    }
}

export const clearError =()=> async (dispach)=>{
    dispach({type:userActionType.CLEAR_ERRORS})
}