import { combineReducers } from "redux";
const initialState = {
  userDetails: "",
};

export const userDetails = (state = initialState.userDetails, action) => {
  switch (action.type) {
    case "updateUserDetails":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  userDetails,
});
