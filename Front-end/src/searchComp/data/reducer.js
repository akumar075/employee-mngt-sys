import { combineReducers } from "redux";
const initialState = {
  empData: [],
  localSearchKey: "",
};

export const employeeData = (state = initialState.empData, action) => {
  switch (action.type) {
    case "updateEmpData":
      return [...action.payload];
    default:
      return state;
  }
};

export const localSearchKey = (state = initialState.localSearchKey, action) => {
  switch (action.type) {
    case "updateLocalSearchKey":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  employeeData,
  localSearchKey,
});
