import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
