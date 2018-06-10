import React, { Component } from "react";

import DoubleCharKey from "./keys/DoubleCharKey";
import LetterKey from "./keys/LetterKey";
import TabKey from "./keys/TabKey";
export default class SecondRow extends Component {
    render() {
        return (
            <div className="keyboard-row">
                <TabKey />
                <LetterKey value="q" shifted="Q" />
                <LetterKey value="w" shifted="W" />
                <LetterKey value="e" shifted="E" />
                <LetterKey value="r" shifted="R" />
                <LetterKey value="t" shifted="T" />
                <LetterKey value="y" shifted="Y" />
                <LetterKey value="u" shifted="U" />
                <LetterKey value="i" shifted="I" />
                <LetterKey value="o" shifted="O" />
                <LetterKey value="p" shifted="P" />
                <DoubleCharKey value="[" shifted="{" />
                <DoubleCharKey value="]" shifted="}" />
                <DoubleCharKey value="\" shifted="|" />
            </div>
        );
    }
}
