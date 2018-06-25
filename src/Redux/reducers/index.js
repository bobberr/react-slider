import { combineReducers } from "redux";
import slidesReducer from "./slides";

const combinedReducer = combineReducers({ slides: slidesReducer });

export default combinedReducer;
