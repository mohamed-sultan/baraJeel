import { createStore, applyMiddleware, compose } from "redux";
import { middleware } from "./navigators/RootNavigator";
import logger from "redux-logger";

import reducers from "./reducers";
//export default createStore(reducers, {}, applyMiddleware(middleware));

export default compose(applyMiddleware(middleware, logger))(createStore)(
  reducers
);
