import React, { Component } from "react";
import ShiftKey from "./keys/ShiftKey";
import LetterKey from "./keys/LetterKey";
import DoubleCharKey from "./keys/DoubleCharKey";
export default class FourthRow extends Component {
    render() {
        return (
            <div className="keyboard-row">
                <ShiftKey />
                <LetterKey value="z" shifted="Z" />
                <LetterKey value="x" shifted="X" />
                <LetterKey value="c" shifted="C" />
                <LetterKey value="v" shifted="V" />
                <LetterKey value="b" shifted="B" />
                <LetterKey value="n" shifted="N" />
                <LetterKey value="m" shifted="M" />
                <DoubleCharKey value="," shifted="<" />
                <DoubleCharKey value="." shifted=">" />
                <DoubleCharKey value="?" shifted="/" />
                <ShiftKey />
            </div>
        );
    }
}
