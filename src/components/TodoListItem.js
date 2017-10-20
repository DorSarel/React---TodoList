import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const TodoListItem = (props) => {
  return (
    <li className="todo-list-item">
      <span> {props.name} </span>

      <button className="btn">In Progress</button>
      <button className="btn">Remove</button>
    </li>
  );
}

TodoListItem.PropTypes = {
  name: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  createdAt: PropTypes.object.isRequired
}

export default TodoListItem;
