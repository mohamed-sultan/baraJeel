import { ConnectionStatus } from "../actions/types";

const initialState = {
  isConnected: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConnectionStatus:
      return { ...state, isConnected: action.payload };

    default:
      return state;
  }
};
