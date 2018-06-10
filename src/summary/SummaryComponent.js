import React, { Component } from "react";
import IconCheckCircle from "../icons/IconCheckCircle";
import IconXCircle from "../icons/IconXCircle";
import "./summary.css";
import { connect } from "react-redux";
import CharacterSelector from "./CharacterSelector";
import Timer from "./Timer";
class SummaryComponent extends Component {
    get totalStrokes() {
        const { passCount, failCount } = this.props;
        return passCount + failCount;
    }
    render() {
        return (
            <div className="summary shadow bordered-top">
                <Timer />
                <div className="header">
                    <div className="currentChar shadow">
                        <h6>{this.props.currentChar.toUpperCase()}</h6>
                    </div>
                </div>
                <CharacterSelector />
                <div className="highlights">
                    <i className="fill-primary">
                        <IconCheckCircle />
                    </i>
                    <span className="text-lg" title="Pass count">
                        {this.props.passCount}
                    </span>
                    <i className="fill-danger">
                        <IconXCircle />
                    </i>
                    <span className="text-lg" title="Fail Count">
                        {this.props.failCount}
                    </span>
                </div>
                <div
                    className=" shadow bordered-left d-flex jcsb aic p-2"
                    title="Characters per minute"
                >
                    <span title="Characters per minute" className="text-md">
                        Cpm
                    </span>
                    <span className="text-lg"> {this.props.cpm}</span>
                </div>
                <div className="d-flex jcfe aic p-2">
                    <strong className="text-md">
                        {this.props.passCount}/{this.props.totalCharacters}
                    </strong>
                </div>
            </div>
        );
    }
}

const mapStateToprops = ({ courses, summary }) => ({
    totalCharacters: courses.get("totalCharacters"),
    currentChar: courses.get("currentChar"),
    passCount: courses.get("passCount"),
    failCount: courses.get("failCount"),
    cpm: summary.get("cpm")
});

export default connect(mapStateToprops, null)(SummaryComponent);
