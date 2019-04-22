import { DoToast } from "./types";

export const Toast = (ms, color, duration) => {
  return {
    type: DoToast,
    ms,
    color,
    duration
  };
};
