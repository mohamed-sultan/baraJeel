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
      console.log("===============rtl reducer=====================");
      console.log(payload);
      console.log("===================rtl reducer======================");
      return { ...state, rtl: payload };

    default:
      return state;
  }
};
