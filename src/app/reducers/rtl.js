const initialState = {
  rtl: true,
  logout: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "logout":
      return {
        ...state,
        logout: true
      };
    case "rtl":
      return { ...initialState, rtl: payload };

    default:
      return state;
  }
};
