import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = { time: { m: [0, 1], s: [0, 0] }, seconds: 60, timeColor: '#ffffff' };
        this.timer = 0;

        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let h = [Math.floor(hours / 10), hours % 10];

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let m = [Math.floor(minutes / 10), minutes % 10];

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let s = [Math.floor(seconds / 10), seconds % 10];

        let obj = {
            "h": h,
            "m": m,
            "s": s
        };
        return obj;
    }

    componentDidMount() {
        this.setState({
            time: this.secondsToTime(this.props.seconds),
            seconds: this.props.seconds
        });

        if (this.timer === 0) {
            setTimeout(() => {
                this.timer = setInterval(this.countDown, 1000);
            }, this.props.delay * 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1 + this.props.increase;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });

        // Check if we are near to end change color
        if (seconds < 10) {
            this.setState({ timeColor: '#ff0000' });
        } else if (seconds < 25) {
            this.setState({ timeColor: '#ff8800' });
        } else {
            this.setState({ timeColor: '#ffffff' });
        }

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            this.props.endTime();
        }

        // Check if timer stopped
        if (this.props.stop) {
            clearInterval(this.timer);
        }

        this.props.increaseTime(0);
    }

    render() {
        let timeColor = {
            color: this.state.timeColor
        };

        return (
            <div className="timer">
                <div className="flip-container" style={timeColor}>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.m[0]}</div>
                    </div>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.m[1]}</div>
                    </div>
                    <div className="ticker">:</div>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.s[0]}</div>
                    </div>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.s[1]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {
    increase: PropTypes.number.isRequired,
    endTime: PropTypes.func.isRequired,
    increaseTime: PropTypes.func.isRequired
};

export default Timer;