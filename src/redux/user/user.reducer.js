const INITIAL_STATE = {
  currentUser: null
};

//If state is null, then it will get initial_state (ES6 feature)
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      //if the case is = set_current_user, I want to return this new object
      return {
        ...state,
        currentUser: action.payload
      };
    //If not, return the current state
    default:
      return state;
  }
};

export default userReducer;
