import React, { Component } from "react";
import Key from "./Key";
export default class StickyKey extends Component {
    render() {
        return (
            <Key
                extraClass={this.props.extraClass}
                value={this.props.value}
                render={state => state.value}
            />
        );
    }
}
