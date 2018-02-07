import React from "react";
import { IconButton } from "material-ui";
import { Plus } from "mdi-material-ui";

import "./tasksPanel.css";

class TasksPanel extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="tasks-panel-container">
        <div className="header">
          <h1 className="h1">Tasks</h1>
          <IconButton className="add-task">
            <Plus />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default TasksPanel;
