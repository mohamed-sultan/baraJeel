import { combineReducers } from "redux";

import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
const config = {
  key: "root",
  storage,
  blacklist: ["netInfo", "nav", "route", "toast", "logout"]
};

import ToastReducer from "./toast";
import NavigationReducer from "./NavigationReducer";
import CurrentRoute from "./currentRoute";
import netInfoReducers from "./netinfo";
import RtlReducer from "./rtl";
import LogOutReaucer from "./logOut";
import departmentsReducer from "./department";
import AuthReducer from "./auth";
import OrdersReducer from "./orders";

export default persistCombineReducers(config, {
  nav: NavigationReducer,
  netInfo: netInfoReducers,
  toast: ToastReducer,
  route: CurrentRoute,
  rtl: RtlReducer,
  logout: LogOutReaucer,
  departments: departmentsReducer,
  auth: AuthReducer,
  orders: OrdersReducer
});
