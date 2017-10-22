import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const InProgressList = (props) => {
    return (
      <div className="list-container-child">
        <h3>In Progress:</h3>
        <ul>
          {
            props.tasks.filter( (task) => task.isInProgress )
            .map( (task) => {
              return (
                <TodoListItem
                  name={task.name}
                  removeTask={ () => {props.removeTaskFrom(task.id)} }
                  setAsInValue={ () => {props.setAs("done", task.id)} }
                  createdAt={task.createdAt} />
              );
            } )
          }
        </ul>
      </div>
    );
}

InProgressList.PropTypes = {
  tasks: PropTypes.array.isRequired,
  removeTask: PropTypes.func.isRequired,
  setAs: PropTypes.func.isRequired
}

export default InProgressList;
