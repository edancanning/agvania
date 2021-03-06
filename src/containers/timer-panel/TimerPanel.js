import React from "react";
import { Button, Paper } from "material-ui";
import { Pause, Restart } from "mdi-material-ui";
import "./timerPanel.css";

class TimerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      currentMinutes: this.props.pomodoroLength,
      currentSeconds: 0,
      timerOn: false
    };
  }

  timer = () => {
    if (this.state.currentSeconds === 0) {
      if (this.state.currentMinutes === 0) {
        this.stopTimer();
      }
      this.setState({
        currentMinutes: this.state.currentMinutes - 1,
        currentSeconds: 59
      });
    } else {
      this.setState({
        currentSeconds: this.state.currentSeconds - 1
      });
    }
  };

  stopTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ timer: null, timerOn: false });
  };

  startTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ timer: setInterval(this.timer, 1000), timerOn: true });
  };

  restartTimer = () => {
    this.stopTimer();
    this.setState({
      currentSeconds: 0,
      currentMinutes: this.props.pomodoroLength
    });
  };

  secondsPrinter(seconds) {
    var str = String(seconds);
    if (str.length === 1) {
      return str + "0";
    }
    return str;
  }

  controls = (
    <div className="controls">
      <Button
        onClick={this.stopTimer}
        variant="raised"
        color="secondary"
        className="control pause"
      >
        <Pause />
      </Button>
      <Button
        onClick={this.restartTimer}
        variant="raised"
        color="secondary"
        className="control restart"
      >
        <Restart />
      </Button>
    </div>
  );

  start = (
    <Button
      color="primary"
      variant="raised"
      className="start"
      onClick={this.startTimer}
    >
      Start
    </Button>
  );

  renderPomodoros(n) {
    var pomodoros = [];
    for (let i = 0; i < n; i++) {
      pomodoros.push(<Paper key={i} className="pomodoro" />);
    }
    return pomodoros;
  }

  render() {
    return (
      <div className="timer-container">
        <div className="timer p">
          {this.state.currentMinutes}:{this.secondsPrinter(
            this.state.currentSeconds
          )}
        </div>
        {this.state.timerOn ? this.controls : this.start}
        <div className="stats">
          <div className="written-stats">
            <p className="p-sm">
              <span>Today: </span>
              {this.props.completedToday}
            </p>
            <p className="p-sm">
              <span>This week: </span>
              {this.props.completedToday}
            </p>
          </div>
          <div className="pomodoros">
            {this.renderPomodoros(this.props.completedToday)}
          </div>
        </div>
      </div>
    );
  }
}

export default TimerPanel;
