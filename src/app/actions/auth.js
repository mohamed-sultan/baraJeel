import axios from "axios";
import { DoToast } from "../../../App";
import Localization from "../localization/localization";

import {
  LOGIN_ATTEMPT,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  RegisterAttemp,
  RegisterSuccess,
  RegisterFail
} from "./types";

export const Login = (email, password, navigation, dispatch) => {
  dispatch({ type: LOGIN_ATTEMPT });
  axios
    .post("http://trust.shobeek-lobeek.com/api/auth/login", { email, password })
    .then(r => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: r.data.data,
        token: r.data.token,
        email
      });
      navigation.navigate("HomeNav");
      DoToast(`${Localization.welcome} ${r.data.data.name}`);
    })
    .catch(e => {
      dispatch({ type: LOGIN_FAILED });
      DoToast(Localization.loginFail);
    });
};

export const Register = (
  name,
  email,
  mobile,
  password,
  navigation,
  dispatch
) => {
  dispatch({ type: RegisterAttemp });
  axios
    .post("http://trust.shobeek-lobeek.com/api/auth/register", {
      name,
      email,
      mobile,
      password
    })
    .then(r => {
      dispatch({
        type: RegisterSuccess,
        payload: r.data.data,
        token: r.data.token,
        email
      });
      navigation.navigate("HomeNav");
      DoToast(`${Localization.welcome} ${r.data.data.name}`);
    })
    .catch(e => {
      console.log("============error register========================");
      console.log(e);
      console.log("==============error register======================");
      dispatch({ type: RegisterFail });
      DoToast(Localization.thereIsSomeTHingWron);
    });
};
