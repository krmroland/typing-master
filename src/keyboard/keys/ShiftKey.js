import React, { Component } from "react";
import IconArrowUp from "../../icons/IconArrowUp";
import IconKey from "./IconKey";
export default class ShiftKey extends Component {
    render() {
        return (
            <IconKey
                extraClass="shift-key"
                value="shift"
                icon={() => <IconArrowUp />}
            />
        );
    }
}
