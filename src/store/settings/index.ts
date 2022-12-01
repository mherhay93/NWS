import {combineReducers} from "redux";
import dataReducer from "./data";

export const rootReducer = combineReducers({
   dataCategories:dataReducer
})
