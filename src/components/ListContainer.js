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
        removeTaskFrom={props.removeTaskFrom}
        setAs={props.setAs} />

      <InProgressList
        tasks={props.tasks}
        removeTaskFrom={props.removeTaskFrom}
        setAs={props.setAs} />

      <DoneList
        tasks={props.tasks}
        removeTaskFrom={props.removeTaskFrom} />

    </div>
  );
}

ListContainer.PropTypes = {
  tasks: PropTypes.array.isRequired,
  removeTaskFrom: PropTypes.func.isRequired,
  setAs: PropTypes.func.isRequired,
}

export default ListContainer;
