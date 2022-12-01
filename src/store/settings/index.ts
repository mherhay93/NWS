import {combineReducers} from "redux";
import dataReducer from "./data";
import dataReducerSettings from "./settings";

export const rootReducer = combineReducers({
   dataCategories:dataReducer,
   settings:dataReducerSettings
})
