import AuthRoute from "../../util/AuthRoute";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../types";

// Login User
export const loginUser = (data, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  return AuthRoute()
    .post("/auth/login", data)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      history.push("/dashboard");
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
      console.log(err.response);
    });
};

export const registerUser = (data, history) => dispatch => {
  dispatch({ type: REGISTER_START });
  return AuthRoute()
    .post("/auth/register", data)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      history.push("/dashboard");
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL, payload: err });
      console.log(err.response);
    });
};
