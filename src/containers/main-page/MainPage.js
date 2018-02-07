import React from "react";
import TimerPanel from "../timer-panel/TimerPanel";
import TasksPanel from "../tasks-panel/TasksPanel";
import "./mainPage.css";

var mockTaskData = [
  {
    name: `Task ${Math.floor(Math.random() * 10) + 1}`,
    expected: 1,
    activeMinutes: Math.floor(Math.random() * 45),
    activeSeconds: 16,
    completed: false
  }
];

class MainPage extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="main-page-container">
        <TimerPanel pomodoroLength={25} completedToday={6} />
        <TasksPanel />
      </div>
    );
  }
}

export default MainPage;
