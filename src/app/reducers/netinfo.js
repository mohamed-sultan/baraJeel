import { UpdateConnection } from "../actions/types";

const initialState = {
  isConnected: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UpdateConnection:
      return { ...state, isConnected: action.payload };

    default:
      return state;
  }
};
