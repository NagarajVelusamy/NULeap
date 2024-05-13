import { combineReducers } from "redux";
import TaskReducer from "./features/task/taskSlice";

const rootReducer = combineReducers({
  tasks: TaskReducer,
});

export default rootReducer;
