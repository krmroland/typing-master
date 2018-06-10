import React, { Component } from "react";
import "./navbar.css";
export default class NavabarComponent extends Component {
    render() {
        return (
            <div className="navbar bordered-top d-flex">
                <div href="" className="navbar-brand">
                    RKM
                </div>
                <div className="navbar-links d-flex">
                    <a className="navbar-link active ">Key drill (Junior)</a>
                    <a className="navbar-link">Key Drill (senior)</a>
                    <a className="navbar-link">Word drill</a>
                    <a className="navbar-link">Text drill</a>
                </div>
            </div>
        );
    }
}
