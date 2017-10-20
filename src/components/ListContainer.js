import React from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import InProgressList from "./InProgressList";
import DoneList from "./DoneList";

const ListContainer = (props) => {
  return (
    <div className="list-container">
      <TodoList
        tasks={props.tasks}
        setAsComplete={props.setAsCompleteId}
        removeTaskFrom={props.removeTaskFrom} />

      <InProgressList />

      <DoneList />

    </div>
  );
}

ListContainer.PropTypes = {
  tasks: PropTypes.array.isRequired,
  setAsCompleteId: PropTypes.func.isRequired,
  removeTaskFrom: PropTypes.func.isRequired
}

export default ListContainer;
