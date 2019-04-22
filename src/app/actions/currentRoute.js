export const ChangeRoute = payload => {
  console.log("====================================");
  console.log("curren", payload);
  console.log("====================================");
  return {
    type: "changeRoute",
    payload
  };
};
