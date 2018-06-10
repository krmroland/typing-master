import { coursekeyPressed, resetSound } from "./courseActions";
import { updateSummary } from "./summaryActions";
const updateKeyboard = event => ({ type: "KEY-PRESSED", event });

const keyRealesed = event => ({ type: "KEY-RELEASED", event });

export const keyUp = event => {
    return function(dispatch) {
        dispatch(keyRealesed(event));
        dispatch(resetSound());
    };
};

export const keyDown = event => {
    return function(dispatch, getState) {
        dispatch(updateKeyboard(event));
        dispatch(coursekeyPressed(event.key));
        //update the progress using the course state
        const courses = getState().courses;
        const data = {
            totalChars: courses.get("totalCharacters"),
            passed: courses.get("passCount"),
            failed: courses.get("failCount")
        };
        dispatch(updateSummary(data));
    };
};
