import React, { Component } from "react";
import IconBars from "../../icons/IconBars";
import IconKey from "./IconKey";
export default class CommandKey extends Component {
    render() {
        return (
            <IconKey
                value=""
                icon={() => <IconBars />}
                extraClass="command-key"
            />
        );
    }
}
