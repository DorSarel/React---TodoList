import React from "react";
import PropTypes from "prop-types";

const TodoListItem = (props) => {
  return (
    <li className="todo-list-item">
      {props.name}
    </li>
  );
}

TodoListItem.PropTypes = {
  name: PropTypes.string.isRequired
}

export default TodoListItem;
