import {
  LOGIN_ATTEMPT,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  RegisterAttemp,
  RegisterSuccess,
  RegisterFail
} from "../actions/types";

const initialState = {
  user: null,
  token: null,
  loadingLogin: false,
  loadingRegister: false,
  email: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return { ...state, loadingLogin: true, loadingRegister: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loadingLogin: false,
        loadingRegister: false,
        user: action.payload,
        token: action.token,
        email: action.email
      };
    case LOGIN_FAILED:
      return { ...state, loadingLogin: false, loadingRegister: false };
    case RegisterAttemp:
      return { ...state, loadingLogin: false, loadingRegister: true };
    case RegisterSuccess:
      return {
        ...state,
        loadingLogin: false,
        loadingRegister: false,
        user: action.payload,
        token: action.token,
        email: action.email
      };
    case RegisterFail:
      return { ...state, loadingLogin: false, loadingRegister: false };

    default:
      return state;
  }
};
