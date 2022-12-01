import {createStore} from "redux";
import {rootReducer} from "./settings";

const store = createStore(rootReducer)

export default store
