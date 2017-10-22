import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const TodoListItem = (props) => {
  return (
    <li className="todo-list-item">
      <span> {props.name} </span>

      <button className="btn" onClick={props.setAsInValue}>In Progress</button>
      <button className="btn" onClick={props.removeTask}>Remove</button>
    </li>
  );
}

TodoListItem.PropTypes = {
  name: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  setAsInValue: PropTypes.func.isRequired,
  createdAt: PropTypes.object.isRequired
}

export default TodoListItem;
