import React, { Component, Fragment } from "react";
import Key from "./Key";
export default class SingleCharKey extends Component {
    render() {
        return (
            <Key
                value={this.props.value}
                shifted={this.props.shifted}
                extraClass={this.props.extraClass}
                render={state => <Fragment>{state.value}</Fragment>}
            />
        );
    }
}
