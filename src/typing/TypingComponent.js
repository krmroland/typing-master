import React, { Component } from "react";
import KeyDrillComponent from "./KeyDrillComponent";
import "./course.css";

import { connect } from "react-redux";

class TypingComponent extends Component {
    render() {
        if (this.props.drill === "key") {
            return (
                <div>
                    <KeyDrillComponent />
                </div>
            );
        }
        return null;
    }
}
const mapStateToProps = ({ courses }) => {
    return {
        drill: courses.get("drill")
    };
};

export default connect(mapStateToProps, null)(TypingComponent);
