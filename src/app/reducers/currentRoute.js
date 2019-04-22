const initialState = {
  current: "Home"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "changeRoute":
      return { ...state, current: payload };

    default:
      return state;
  }
};
