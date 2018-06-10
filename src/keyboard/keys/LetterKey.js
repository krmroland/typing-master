import React, { Component } from "react";
import Key from "./Key";
export default class LetterKey extends Component {
    render() {
        return (
            <Key
                value={this.props.value}
                shifted={this.props.shifted}
                extraClass={this.props.extraClass}
                render={props => {
                    //if caps lock is on and shift is also on , then we show lowercase values
                    if (props.capsOn && props.sticky === "shift") {
                        return props.value;
                    }
                    //if caps is on or we are in shift mode ,we want upper case
                    if (props.capsOn || props.sticky === "shift") {
                        return props.shifted;
                    }
                    return props.value;
                }}
            />
        );
    }
}
