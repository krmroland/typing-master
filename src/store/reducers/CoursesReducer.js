import Course from "../../courses/Course";

export default function(state = Course.initialState, payload) {
    switch (payload.type) {
        case "COURSE-KEY-PRESSED":
            return Course.keyPressed(state, payload.key);
        case "RESET-SOUND":
            return state.set("sound", null);
        case "COURSE-SET-CHAR":
            return Course.setDefaultCharacter(state, payload.char);

        default:
            return state;
    }
}
