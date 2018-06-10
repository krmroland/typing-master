import React, { Component } from "react";
import StickyKey from "./StickyKey";

export default class AltKey extends Component {
    render() {
        return <StickyKey extraClass="alt-key" value="alt" />;
    }
}
