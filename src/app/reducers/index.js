import { combineReducers } from "redux";

import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
const config = {
  key: "root",
  storage,
  blacklist: ["netInfo", "nav", "route"]
};

import ToastReducer from "./toast";
import NavigationReducer from "./NavigationReducer";
import CurrentRoute from "./currentRoute";
import netInfoReducers from "./netinfo";
import RtlReducer from "./rtl";
import LogOutReaucer from "./logOut";

export default persistCombineReducers(config, {
  nav: NavigationReducer,
  netInfo: netInfoReducers,
  toast: ToastReducer,
  route: CurrentRoute,
  rtl: RtlReducer,
  logout: LogOutReaucer
});
