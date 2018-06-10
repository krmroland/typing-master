import { Record, List } from "immutable";

const Key = Record({ char: "", class: "" });

export default class BaseDrill {
    constructor(course) {
        this.course = course;
        this.wordIndex = 0;
        this.currentIndex = 0;
        this.setCurrentWord();
    }

    /**
     * resets the class to tis initial values
     * @return {undefined}
     */
    reset() {
        this.currentIndex = 0;
        this.wordIndex = 0;
        this.setCurrentWord();
    }
    /**
     * sets the word to be typed
     */
    setCurrentWord() {
        this.currentWord = List(this.transformWord(this.nextWord()));
    }
    /**
     * gets the next word
     * @return {String }
     */
    nextWord() {
        if (this.wordIndex < this.course.words.count()) {
            return this.course.words.get(++this.wordIndex);
        }
        return "THE END";
    }
    /**
     * Splits a word into an array of its characters
     * @param  {String} word
     * @return {Array}
     */
    transformWord(word) {
        return word.split("").map(char => new Key({ char }));
    }

    /**
     * gets the current key
     * @return {String}
     */
    get currentKey() {
        return this.currentWord.get(this.currentIndex);
    }
    /**
     * updates the state based on they that was pressed
     * @param  {Immutable.Map} state
     * @param  {String} key
     * @return {Immutable.Map}
     */
    updateState(state, key) {
        const passed = key === this.currentKey.char;

        return state.withMutations(state => {
            //set the appropriate sound
            const sound = passed ? "passed" : "missed";
            state.set("sound", sound);
            //set the appropriate class
            const className = passed ? "key-passed" : "key-failed";
            state.update("currentWord", word =>
                word.update(this.currentIndex, key =>
                    key.set("class", className)
                )
            );
            if (!passed) {
                state.set("failed", key).update("failCount", count => ++count);
                //if missed ,the current index  and words do not change
                return;
            }
            state.set("failed", null).update("passCount", count => ++count);

            //if we are running out of words in the current character selection,
            //its time to select a new character set
            if (this.course.words.count() === this.wordIndex + 1) {
                this.course.nextCharacterWords();
                this.reset();
            }
            //if we are on the last character of the current word
            //time to pop in a new word
            if (this.currentWord.count() === this.currentIndex + 1) {
                // time to bring another set of characters
                this.currentIndex = 0;
                this.setCurrentWord();
                state
                    .set("currentChar", this.course.currentChar)
                    .set("currentWord", this.currentWord)
                    .set("totalWords", this.course.words.count())
                    .set("currentKey", this.currentKey);
                return;
            }
            //time to relax, increment the index and move on
            ++this.currentIndex;
            state.set("currentKey", this.currentKey);
        });
    }
}
