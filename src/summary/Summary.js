import { Map } from "immutable";
class Summary {
    /**
     * Creates an instance of the Summary Class
     * @return {Summary}
     */
    constructor() {
        this.initialState = Map({
            progress: 0,
            accuracy: 100,
            hours: 0,
            minutes: 0,
            seconds: 0,
            //characters per minute
            cpm: 0
        });
    }
    /**
     * updates the given state
     * @param  {Immutable.Map} state
     * @param  {Number} options.passed
     * @param  {Number} options.failed
     * @param  {Number} options.totalChars
     * @return {immutable.Map}
     */
    updateState(state, { passed, failed, totalChars }) {
        if (totalChars === 0) return state;
        const cpm = this.charactersPerMinute(state, passed, failed);
        const progress = Number(passed / totalChars * 100).toFixed(1);
        const accuracy = Number(
            (totalChars - failed) / totalChars * 100
        ).toFixed(2);
        return state
            .set("progress", progress)
            .set("accuracy", Math.max(0, accuracy))
            .set("cpm", cpm);
    }
    /**
     * updates the current time
     * @param  {immutable.Map} state
     * @param  {Number} options.hours
     * @param  {Number} options.minutes
     * @param  {Number} options.seconds
     * @return {Number}
     */
    updateTime(state, { hours, minutes, seconds }) {
        return state
            .set("hours", hours)
            .set("minutes", minutes)
            .set("seconds", seconds);
    }
    /**
     * calculates the characters per minute
     * @param  {immutable.State} state
     * @param  {Number} passed
     * @param  {Number} failed
     * @return {Number}
     */
    charactersPerMinute(state, passed, failed) {
        const total = passed + failed;
        const mins = (state.get("minutes") + state.get("seconds") * 60) / 60;
        return Math.floor(mins > 0 ? total / mins : 0);
    }
}
// export the same instance on every import
export default new Summary();
