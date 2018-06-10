import { Map } from "immutable";

const StickyKeys = {
    Shift: "shift",
    Control: "ctrl",
    Alt: "alt",
    ContextMenu: "",
    Backspace: "backspace",
    Enter: "enter"
};

class Keyboard {
    /**
     * creates an instance of a keyboard class
     * @return {Keyboard}
     */
    constructor() {
        this.initialState = Map({
            sticky: null,
            pressed: null,
            capsOn: null,
            event: null,
            repeated: false
        });
    }
    /**
     * gets the sticky key's label based on KeyboardEvent.key
     * @param  {String} key
     * @return {String|undefined}
     */
    getStickyLabel(key) {
        return StickyKeys[key];
    }
    isPrintableKey(key) {
        if (key === undefined || key.length > 1 || key === null) return false;
        const ascii = String.prototype.charCodeAt.call(key, 0);
        //anything between 32 and 126 is printable in the ascii table

        //32<code<126
        return 32 <= ascii && ascii <= 126;
    }
    isCapsKey(key) {
        return key === "CapsLock";
    }
    isStickyKey(key) {
        return key in StickyKeys;
    }

    keyedDown(state, event) {
        const key = event.key;

        state = state.set("repeated", event.repeat);
        if (this.isStickyKey(key)) {
            return state.set("sticky", this.getStickyLabel(key));
        }

        //mark the caps locks state
        if (this.isCapsKey(key)) {
            return state.set("capsOn", !event.getModifierState("CapsLock"));
        }

        return state;
    }
    //listen for key ups especially for stick buttons
    keyedUp(state, event) {
        return state.set("sticky", null);
    }
}

export default new Keyboard();
