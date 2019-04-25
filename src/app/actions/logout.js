export const LogOutAction = (navigation, dispatch) => {
  dispatch({ type: "logout", payload: true });
};
