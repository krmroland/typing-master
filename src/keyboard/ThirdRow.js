import React, { Component } from "react";
import DoubleCharKey from "./keys/DoubleCharKey";
import LetterKey from "./keys/LetterKey";
import StickyKey from "./keys/StickyKey";
import EnterKey from "./keys/EnterKey";

export default class ThirdRow extends Component {
    render() {
        return (
            <div className="keyboard-row">
                <StickyKey value="caps lock" extraClass="caps-key" />
                <LetterKey value="a" shifted="A" />
                <LetterKey value="s" shifted="S" />
                <LetterKey value="d" shifted="D" />
                <LetterKey value="f" shifted="F" />
                <LetterKey value="g" shifted="G" />
                <LetterKey value="h" shifted="H" />
                <LetterKey value="j" shifted="J" />
                <LetterKey value="k" shifted="K" />
                <LetterKey value="l" shifted="L" />
                <DoubleCharKey value=";" shifted=":" />
                <DoubleCharKey value="'" shifted="&quot;" />
                <EnterKey />
            </div>
        );
    }
}
