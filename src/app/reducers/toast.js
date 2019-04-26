import { DoToast } from "../actions/types";

const initialState = {
  ms: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DoToast:
      return {
        ...state,
        ms: action.ms
      };

    default:
      return state;
  }
};
