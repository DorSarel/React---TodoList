import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <div className="list-container-child">
      <h3>Todo:</h3>
      <ul>

        {props.tasks.filter( task => task.isTodo )
          .map((task) => {
          return (
            <TodoListItem
              name={task.name}
              createdAt={task.createdAt}
              key={task.id}
              removeTask={ () => {props.removeTaskFrom(task.id)} } />
          );
        })}

      </ul>
    </div>
  );
}

TodoList.PropTypes = {
  tasks: PropTypes.array.isRequired,
  removeTaskFrom: PropTypes.func.isRequired
}

export default TodoList;
