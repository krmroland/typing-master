import React, { Component } from "react";

import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";
import { keyDown, keyUp } from "../store/actions/keyboardActions";
import "../css/keyboard.css";
import { connect } from "react-redux";

class KeyboardComponent extends Component {
    constructor(props) {
        super(props);
        this.keyedDown = this.keyedDown.bind(this);
        this.keyedUp = this.keyedUp.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener("keydown", this.keyedDown);
        document.body.addEventListener("keyup", this.keyedUp);
    }
    componentWillUnmount() {
        //remove the event listeners to avoid memory leaks
        document.body.removeEventListener("keydown", this.keyedDown);
        document.body.removeEventListener("keyup", this.keyedUp);
    }
    keyedDown(event) {
        this.props.keyDown(event);
        event.stopPropagation();
    }
    keyedUp(event) {
        this.props.keyUp(event);
        event.stopPropagation();
    }
    render() {
        return (
            <div className="keyboard">
                <FirstRow />
                <SecondRow />
                <ThirdRow />
                <FourthRow />
                <FifthRow />
            </div>
        );
    }
}
const mapActionsToProps = dispatch => ({
    keyDown: event => dispatch(keyDown(event)),
    keyUp: event => dispatch(keyUp(event))
});
export default connect(null, mapActionsToProps)(KeyboardComponent);
