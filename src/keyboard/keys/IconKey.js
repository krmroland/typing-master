import React, { Component, Fragment } from "react";
import Key from "./Key";
export default class IconKey extends Component {
    render() {
        const extraClass = this.props.extraClass
            ? "button-has-icon " + this.props.extraClass
            : "button-has-icon";
        return (
            <Key
                extraClass={extraClass}
                value={this.props.value}
                render={state => (
                    <Fragment>
                        <span>{state.value}</span>
                        {this.props.icon()}
                    </Fragment>
                )}
            />
        );
    }
}
