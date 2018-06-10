import React, { Component } from "react";
import "./css/App.css";
import MainKeyBoard from "./keyboard/MainKeyBoard";
import { Provider } from "react-redux";
import NavbarComponent from "./layouts/NavbarComponent";
import TypingComponent from "./typing/TypingComponent";
import Dashboard from "./summary/Dashboard";
import Sounds from "./sounds/Sounds";
import SummaryComponent from "./summary/SummaryComponent";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container d-flex">
                    <Sounds />
                    <div className="flex-8 jcc ">
                        <NavbarComponent />
                        <div className="bg-white flex-8">
                            <TypingComponent />
                            <Dashboard />
                            <MainKeyBoard />
                        </div>
                    </div>
                    <div className="flex-4">
                        <SummaryComponent />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
