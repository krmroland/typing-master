import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import keyboardReducer from "./reducers/keyboardReducer";
import CoursesReducer from "./reducers/CoursesReducer";
import summaryReducer from "./reducers/summaryReducer";
export default createStore(
    combineReducers({
        keyboard: keyboardReducer,
        courses: CoursesReducer,
        summary: summaryReducer
    }),

    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
);
