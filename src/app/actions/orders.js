import axios from "axios";

import { DoToast } from "../../../App";
import Localization from "../localization/localization";

import {
  FetchOrdenrsNewAttem,
  FetchOrdersNewSuccess,
  FetchOrderNewFail,
  FetchOrderDOneAttemp,
  FetchOrderDoneSuccess,
  FetchOrderDoneFail,
  FetchOrderInprogressAttemp,
  FetchOrderInprogressSuccess,
  FetchOrderInprogressFail,
  CreateNewOrderAttemp,
  CreateNewOrderSuccess,
  CreateNewOrderFail
} from "./types";

export const FetchNewOrders = (token, dispatch) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  dispatch({ type: FetchOrdenrsNewAttem });
  axios
    .get("http://trust.shobeek-lobeek.com/api/me/orders?status=new")
    .then(r => {
      dispatch({ type: FetchOrdersNewSuccess, payload: r.data.data });
    })
    .catch(e => {
      dispatch({ type: FetchOrderNewFail });
      DoToast(Localization.thereIsSomeTHingWron);
    });
};
export const FetchDoneOrders = (token, dispatch) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  dispatch({ type: FetchOrderDOneAttemp });
  axios
    .get("http://trust.shobeek-lobeek.com/api/me/orders?status=done")
    .then(r => {
      dispatch({ type: FetchOrderDoneSuccess, payload: r.data.data });
    })
    .catch(e => {
      dispatch({ type: FetchOrderDoneFail });
      DoToast(Localization.thereIsSomeTHingWron);
    });
};
export const CreateNewOrder = (token, data, navigation, dispatch) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  const formData = new FormData();
  formData.append("department_id", data.department_id);
  formData.append("lat", data.lat);
  formData.append("lng", data.lng);
  formData.append("address", data.address);
  formData.append("type", data.type);
  formData.append("time", data.time);
  formData.append("date", data.date);
  formData.append("note", data.note);
  formData.append("image", data.image);
  formData.append("time", data.time);

  dispatch({ type: CreateNewOrderAttemp });
  axios
    .post("http://trust.shobeek-lobeek.com/api/orders/create", formData, config)
    .then(r => {
      dispatch({ type: CreateNewOrderSuccess, payload: r.data.data });
      DoToast(Localization.yourOrderDoneSuccessfully);
      navigation.popToTop();
      FetchNewOrders(token, dispatch);
    })
    .catch(e => {
      dispatch({ type: CreateNewOrderFail });
      DoToast(Localization.thereIsSomeTHingWron);
    });
};
