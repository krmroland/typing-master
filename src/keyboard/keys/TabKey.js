import React from "react";
import IconKey from "./IconKey";
import IconRepeat from "../../icons/IconRepeat";
export default class TabKey extends IconKey {
    render() {
        return (
            <IconKey
                extraClass="tab-key"
                value="tab"
                icon={() => <IconRepeat />}
            />
        );
    }
}
