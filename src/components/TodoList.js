import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <ul className="todo-list">

      {props.tasks.map((task) => {
        return (
          <TodoListItem
            name={task.name}
            isDone={task.isDone}
            key={task.id}
            setAsComplete={ () => {props.setAsComplete(task.id)} }
            removeTask={ () => {props.removeTaskFrom(task.id)} } />
        );
      })}

    </ul>
  );
}

TodoList.PropTypes = {
  tasks: PropTypes.array.isRequired,
  setAsComplete: PropTypes.func.isRequired,
  removeTaskFrom: PropTypes.func.isRequired
}

export default TodoList;
