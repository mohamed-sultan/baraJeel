import { DoToast } from "../actions/types";

const initialState = {
  ms: "wwwww",
  color: "gray",
  duration: 1000
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DoToast:
      return {
        ...state,
        duration: String(Date.now())
      };

    default:
      return state;
  }
};
