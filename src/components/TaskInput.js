import React from "react";
import PropTypes from "prop-types";

const TaskInput = (props) => {
  return (
    <form onSubmit={props.addNewTask}>
      <input
       type="text"
       placeholder="What do you need to do?"
       onChange={props.onInputChange}
       value={props.pendingTask} />
    </form>
  );
}

TaskInput.PropTypes = {
  onInputChange: PropTypes.func.isRequired,
  addNewTask: PropTypes.func.isRequired,
  pendingTask: PropTypes.string.isRequired
}

export default TaskInput;
