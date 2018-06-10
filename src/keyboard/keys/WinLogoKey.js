import React, { Component } from "react";
import IconKey from "./IconKey";
import IconWindows from "../../icons/IconWindows";
export default class WinLogoKey extends Component {
    render() {
        return (
            <IconKey
                value=""
                icon={() => <IconWindows />}
                extraClass="win-log-key"
            />
        );
    }
}
