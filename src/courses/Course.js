import { Map, List, fromJS } from "immutable";
import Keyboard from "../keyboard/Keyboard";
import WordDrill from "./WordDrill";
import TextDrill from "./TextDrill";
import KeyDrill from "./KeyDrill";
class Course {
    /**
     * creates an instance of  Course class
     * @return {Course}
     */
    constructor() {
        this.currentChar = "a";
        this.totalCharacters = 0;
        this.drill = "key";
        this.level = "junior";
        this.data = List(fromJS(require("./data.json")));
        this.filterWords(this.currentChar);
        this.setDrills();
    }
    /**
     * sets all the kinds of drills
     */
    setDrills() {
        this.keyDrill = new KeyDrill(this);
        this.wordDrill = new WordDrill(this);
        this.textDrill = new TextDrill(this);
    }
    /**
     * gets the current selected drill
     * @return {BaseDrill}
     */
    get currentDrill() {
        return this[this.drill + "Drill"];
    }
    /**
     * gets the initial state
     * @return {Immutable.Map}
     */
    get initialState() {
        return Map({
            currentWord: this.currentDrill.currentWord,
            drill: this.drill,
            sound: null,
            currentKey: this.currentDrill.currentKey,
            passCount: 0,
            failCount: 0,
            totalCharacters: this.totalCharacters,
            failed: null,
            totalWords: this.words.count(),
            currentChar: this.currentChar
        });
    }

    /**
     * filters the words of based on a given nextCharacterWords
     * @param {String} char
     */
    filterWords(char) {
        //reshuffle the words so they dont follow any specified order
        this.words = this.data.filter(word => word[0] === char);
        this.setTotalCharacters();
    }
    /**
     * sets the total number of characters in the list of selected words
     */
    setTotalCharacters() {
        this.totalCharacters = this.words.reduce((a, b) => a + b.length, 0);
    }
    /**
     *sets the words of the next character from the currently selected one
     */
    nextCharacterWords() {
        // get the next character
        // a=97 and z=122
        let nextCharCode = this.currentChar.charCodeAt(0);
        nextCharCode === 122 ? (nextCharCode = 97) : ++nextCharCode;
        this.currentChar = String.fromCharCode(nextCharCode);
        this.filterWords(this.currentChar);
    }
    /**
     * react to  a pressed key
     * @param  {Immutable.Map} state
     * @param  {String} key
     * @return {Immutable.Map}
     */
    keyPressed(state, key) {
        //only handle printable keys
        if (!Keyboard.isPrintableKey(key)) {
            return state;
        }
        return this.currentDrill.updateState(state, key);
    }
    /**
     * sets the character
     * @param {Immutable.Map} state
     * @param {String} char
     */
    setDefaultCharacter(state, char) {
        this.currentChar = char;
        this.filterWords(char);
        this.currentDrill.reset();
        return this.initialState;
    }
}
//ensure we exporting the same instance over every import
export default new Course();
