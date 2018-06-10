import React, { Component } from "react";
import StickyKey from "./keys/StickyKey";
import SingleCharKey from "./keys/SingleCharKey";
import WinLogoKey from "./keys/WinLogoKey";
import CtrKey from "./keys/CtrKey";
import AltKey from "./keys/AltKey";
import CommandKey from "./keys/CommandKey";
export default class FifthRow extends Component {
    render() {
        return (
            <div className="keyboard-row">
                <CtrKey />
                <StickyKey value="fn" extraClass="fn-key" />
                <WinLogoKey />
                <AltKey />
                <SingleCharKey value=" " extraClass="space-key" />
                <AltKey />
                <CommandKey />
                <CtrKey />
            </div>
        );
    }
}
