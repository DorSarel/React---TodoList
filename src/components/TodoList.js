import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <ul className="todo-list">

      {props.tasks.map((task, index) => {
        return (
          <TodoListItem
            name={task.name}
            key={index} />
        );
      })}

    </ul>
  );
}

TodoList.PropTypes = {
  tasks: PropTypes.array.isRequired,
}

export default TodoList;
