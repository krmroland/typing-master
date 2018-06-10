import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTime } from "../store/actions/summaryActions";
import "./time.css";
class Timer extends Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            let { hours, minutes, seconds } = this.props;
            ++seconds;
            if (seconds > 60) {
                seconds = 0;
                ++minutes;
            }
            if (minutes > 60) {
                minutes = 0;
                ++hours;
            }

            this.props.updateTime({ hours, minutes, seconds });
        }, 1000);
    }
    componentWillUnmount() {
        //prevent memory leaks
        clearInterval(this.interval);
    }
    appendZero(prop) {
        return prop > 10 ? prop : "0" + prop;
    }
    render() {
        return (
            <div className="time d-flex jcsb  aic p-2">
                <div className="d-flex aic">
                    HH:<span className="text-lg">
                        {this.appendZero(this.props.hours)}
                    </span>
                </div>
                <div className="d-flex aic">
                    MM:{" "}
                    <span className="text-lg">
                        {this.appendZero(this.props.minutes)}
                    </span>
                </div>
                <div className="d-flex aic">
                    SS :<span className="text-lg">
                        {this.appendZero(this.props.seconds)}
                    </span>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ summary }) => ({
    hours: summary.get("hours"),
    minutes: summary.get("minutes"),
    seconds: summary.get("seconds")
});
const mapActionsToProps = dispatch => ({
    updateTime: data => dispatch(updateTime(data))
});
export default connect(mapStateToProps, mapActionsToProps)(Timer);
