import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../types";

const initialState = {
  token: "",
  user: {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  },
  isAuth: false,
  isLoading: false,
  errors: null,
  isSuccess: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // login
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: { payload },
        isAuth: true,
        isLoading: true,
        isSuccess: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false
      };
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false
      };
    case REGISTER_SUCCESS:
      console.log();
      return {
        token: payload.token,
        user: { payload },
        isAuth: true,
        isLoading: false,
        isSuccess: true
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errors: payload,
        isAuth: false
      };
    default:
      return state;
  }
};
