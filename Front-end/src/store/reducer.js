import { combineReducers } from "redux";
import serverSearchReducer from "../searchComp/data/reducer";
import loginReducer from "../login/data/reducer";

export default combineReducers({
  ["searchComp"]: serverSearchReducer,
  ["loginComp"]:loginReducer,
});
