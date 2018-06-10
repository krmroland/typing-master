import React, { Component } from "react";
import IconArrowLeft from "../../icons/IconArrowLeft";
import IconKey from "./IconKey";
export default class BackSpace extends Component {
    render() {
        return (
            <IconKey
                extraClass="backspace"
                value="backspace"
                icon={() => <IconArrowLeft />}
            />
        );
    }
}
