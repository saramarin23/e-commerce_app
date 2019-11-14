export const setCurrentUser = user => ({
  type: "SET_CURRENT_USER",
  //It has to be the same as in reducer
  payload: user
});
