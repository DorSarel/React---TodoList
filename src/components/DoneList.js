import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const DoneList = (props) => {
  return (
    <div className="list-container-child">
      <h3>Done:</h3>
      <ul>
        {
          props.tasks.filter( (task) => task.isDone)
          .map((task) => {
            return (
              <TodoListItem
                name={task.name}
                key={task.id}
                removeTask={ () => props.removeTaskFrom(task.id) }
                createdAt={task.createdAt}
                isInProgress={task.isInProgress}
                isDone={task.isDone} />
            );
          })
        }
      </ul>
    </div>
  );
}

DoneList.PropTypes = {
  tasks: PropTypes.array.isRequired,
  removeTaskFrom: PropTypes.func.isRequired
}

export default DoneList;
