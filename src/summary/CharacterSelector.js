import React, { Component } from "react";
import { connect } from "react-redux";
import { setCharacter } from "../store/actions/courseActions";
class CharacterSelector extends Component {
    options() {
        const options = [];
        //generate letters frin a to z using ascii
        for (let i = 65; i <= 90; i++) {
            const char = String.fromCharCode(i);
            options.push(
                <option key={i} value={char}>
                    Character {char}
                </option>
            );
        }
        return options;
    }
    render() {
        return (
            <div>
                <select
                    className="control shadow"
                    value={this.props.character.toUpperCase()}
                    onChange={this.props.setCharacter}
                >
                    {this.options()}
                </select>
            </div>
        );
    }
}
const mapStateToProps = ({ courses }) => ({
    character: courses.get("currentChar")
});

const mapActionsToProps = dispatch => ({
    setCharacter: event =>
        dispatch(setCharacter(event.target.value.toLowerCase()))
});
export default connect(mapStateToProps, mapActionsToProps)(CharacterSelector);
