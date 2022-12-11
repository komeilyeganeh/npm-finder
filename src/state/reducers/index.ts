import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
    packages: searchReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;