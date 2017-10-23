import React from "react";
import PropTypes from "prop-types";
// import moment from "moment";

const TodoListItem = (props) => {
  return (
    <li className="todo-list-item">
      <span> {props.name} </span>

      {
        props.isDone ?
        null
        :
        <button className="btn" onClick={props.setAsInValue}>
          {
            props.isInProgress ?
            "Done"
            :
            "In Progress"
          }
        </button>
      }

      <button className="btn" onClick={props.removeTask}>Remove</button>
    </li>
  );
}

TodoListItem.PropTypes = {
  name: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  createdAt: PropTypes.object.isRequired,
  isInProgress: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
  setAsInValue: PropTypes.func
}

export default TodoListItem;
