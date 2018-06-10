import Keyboard from "../../keyboard/Keyboard";

export default function(state = Keyboard.initialState, payload) {
    switch (payload.type) {
        case "KEY-PRESSED":
            return Keyboard.keyedDown(state, payload.event);
        case "KEY-RELEASED":
            return Keyboard.keyedUp(state, payload.event);
        default:
            return state;
    }
}
