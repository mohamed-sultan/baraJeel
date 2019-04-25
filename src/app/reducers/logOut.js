const initialState = {
  logout: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "logout":
      return { ...state, logout: payload };

    default:
      return state;
  }
};
