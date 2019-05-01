import { ShowLanguageScreeOnStartup } from "../actions/types";
const initialState = {
  lanfDidShow: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ShowLanguageScreeOnStartup:
      return { ...state, lanfDidShow: payload };

    default:
      return state;
  }
};
