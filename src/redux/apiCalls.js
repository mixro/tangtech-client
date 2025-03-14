import { publicRequest, userRequest } from "../requestMethod";
import { addOrderFailure, addOrderStart, addOrderSuccess, getOrderFailure, getOrderStart, getOrderSuccess } from "./orderRedux";
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";
import { getServiceFailure, getServiceStart, getServiceSuccess } from "./serviceRedux";
import { loginFailure, loginStart, loginSuccess, logout, registerError, registerStart, registerSuccess } from "./userRedux";

// USER  
export const SignIn = async (dispatch, user, navigate) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (err) {
      dispatch(loginFailure());
    }
};

export const SignUp = async (dispatch, user, navigate) => {
  dispatch(registerStart());
  try {
      const res = await publicRequest.post("/auth/register", user);
      dispatch(registerSuccess(res.data));
      navigate('/');
  } catch(err) {
      dispatch(registerError());
  }
}

export const userLogout = async (dispatch) => {
    dispatch(logout());
};



// PRODUCTS

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch(err) {
    dispatch(getProductFailure());
  }
}


// SERVICES

export const getServices = async (dispatch) => {
  dispatch(getServiceStart());
  try {
    const res = await publicRequest.get("/services");
    dispatch(getServiceSuccess(res.data));
  } catch(err) {
    dispatch(getServiceFailure());
  }
}


//ORDERS

export const addOrder = async (dispatch, order) => {
  dispatch(addOrderStart());
  try {
    const res = await userRequest.post("/orders", order);
    dispatch(addOrderSuccess(res.data));
  } catch(err) {
    dispatch(addOrderFailure());
  }
}

export const getOrders = async (dispatch, userId) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get(`/orders/find/${userId}`);
    dispatch(getOrderSuccess(res.data));
  } catch(err) {
    dispatch(getOrderFailure());
  }
}