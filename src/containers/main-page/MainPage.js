import React from "react";
import Timer from "../../containers/timer/Timer";
import "./mainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="main-page-container">
        <Timer pomodoroLength={25} completedToday={6} />
      </div>
    );
  }
}

export default MainPage;
