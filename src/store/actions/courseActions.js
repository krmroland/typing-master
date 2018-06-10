import { resetSummary } from "./summaryActions";
export const resetSound = () => ({ type: "RESET-SOUND" });

export const coursekeyPressed = key => ({ type: "COURSE-KEY-PRESSED", key });
const updateChar = char => ({ type: "COURSE-SET-CHAR", char });
export const setCharacter = char => {
    return function(dispatch) {
        dispatch(updateChar(char));
        dispatch(resetSummary());
    };
};
