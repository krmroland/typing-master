import Summary from "../../summary/Summary";

export default function(state = Summary.initialState, payload) {
    switch (payload.type) {
        case "UPDATE-SUMMARY":
            return Summary.updateState(state, payload.data);
        case "UPDATE-TIME":
            return Summary.updateTime(state, payload.data);

        case "RESET-SUMMARY":
            return Summary.initialState;
        default:
            return state;
    }
}
