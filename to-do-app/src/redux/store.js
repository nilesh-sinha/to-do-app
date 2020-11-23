import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todo from "./reducers/todos";

export default createStore(todo, composeWithDevTools());
