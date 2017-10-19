import React from "react";
import PropTypes from "prop-types";

const TodoListItem = (props) => {
  return (
    <li className="todo-list-item">
      {props.isDone ?
        <div className="todo-list-item_name task-done"> {props.name} </div>
        :
        <div className="todo-list-item_name"> {props.name} </div>
      }

      <div className="todo-list-item_actions">
        <i className="fa fa-check-square-o" aria-hidden="true" onClick={props.setAsComplete}></i>
        <i className="fa fa-trash-o" aria-hidden="true" onClick={props.removeTask}></i>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
    </li>
  );
}

TodoListItem.PropTypes = {
  name: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  setAsComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default TodoListItem;
