const initialState = {
  rtl: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "rtl":
      return { ...initialState, rtl: payload };

    default:
      return state;
  }
};
