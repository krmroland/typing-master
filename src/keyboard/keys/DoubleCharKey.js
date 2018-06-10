import React, { Fragment, Component } from "react";
import Key from "./Key";
export default class DoubleCharKey extends Component {
    render() {
        return (
            <Key
                extraClass="double-char-key"
                shifted={this.props.shifted}
                value={this.props.value}
                render={state => (
                    <Fragment>
                        <span> {this.props.shifted}</span>
                        <span className="pt-1"> {this.props.value}</span>
                    </Fragment>
                )}
            />
        );
    }
    extraClass() {
        return " ";
    }
}
