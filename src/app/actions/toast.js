import { DoToast } from "./types";

export const Toast = (ms, dispatch) => {
  dispatch({
    type: DoToast,
    ms
  });
};
