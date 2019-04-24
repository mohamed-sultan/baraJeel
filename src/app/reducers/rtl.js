const initialState = {
  rtl:true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "rtl":
      console.log("===============rtl reducer=====================");
      console.log(payload);
      console.log("===================rtl reducer======================");
      return { ...state, rtl: payload };

    default:
      return state;
  }
};
