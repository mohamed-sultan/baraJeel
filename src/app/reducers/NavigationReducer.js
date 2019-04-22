// import {
//         createNavigationReducer,
// } from 'react-navigation-redux-helpers';
// import {RootNavigator} from '../navigator/RootNavigator';

// export const navReducer = createNavigationReducer(RootNavigator);

import { RootNavigator } from "../navigators/RootNavigator";
import { NavigationActions } from "react-navigation";

const initialAction = { type: NavigationActions.Init };
const initialState = RootNavigator.router.getStateForAction(initialAction);

export default (state = initialState, action) => {
  let newState = RootNavigator.router.getStateForAction(action, state);

  if (action.params && action.params.replace) {
    // In order to replace the previous route
    // we'll remove the item at index - 1 and then decrement the index.
    const { index } = newState;
    newState.routes.splice(index - 1, 1);
    newState.index--;
  }

  return newState;
};
