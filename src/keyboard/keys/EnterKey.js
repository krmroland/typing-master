import React, { Component } from "react";
import IconKey from "./IconKey";
import IconEnter from "../../icons/IconEnter";

export default class EnterKey extends Component {
    render() {
        return (
            <IconKey
                value="enter"
                extraClass="enter-key"
                icon={() => <IconEnter />}
            />
        );
    }
}
