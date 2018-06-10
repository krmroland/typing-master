import React, { Component } from "react";
import DoubleCharKey from "./keys/DoubleCharKey";
import BackSpace from "./keys/BackSpace";
export default class FirstRow extends Component {
    render() {
        return (
            <div className="keyboard-row">
                <DoubleCharKey value="`" shifted="~" />
                <DoubleCharKey value="1" shifted="!" />
                <DoubleCharKey value="2" shifted="@" />
                <DoubleCharKey value="3" shifted="#" />
                <DoubleCharKey value="4" shifted="$" />
                <DoubleCharKey value="5" shifted="%" />
                <DoubleCharKey value="6" shifted="^" />
                <DoubleCharKey value="7" shifted="&" />
                <DoubleCharKey value="8" shifted="*" />
                <DoubleCharKey value="9" shifted="(" />
                <DoubleCharKey value="0" shifted=")" />
                <DoubleCharKey value="-" shifted="_" />
                <DoubleCharKey value="+" shifted="=" />
                <BackSpace />
            </div>
        );
    }
}
