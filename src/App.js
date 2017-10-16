import React, { Component } from 'react';
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TodoList from "./components/TodoList";

class App extends Component {

  state = {
    pendingTask: "",
    tasks: [

    ]
  }


  getActiveTasks = () => {
    return (
      this.state.tasks.reduce((total, task) => {
        return task.isDone ? total : total + 1
      }, 0)
    );
  }

  onInputChange = (e) => {
    this.setState({
      pendingTask: e.target.value
    });
  }

  addNewTask = (e) => {
    e.preventDefault();

    this.setState({
      pendingTask: "",
      tasks: [
        {
          name: this.state.pendingTask,
          isDone: false
        },
        ...this.state.tasks
      ]
    });
  }

  render() {
    const activeTasks = this.getActiveTasks()

    return (
      <div className="container">

        <Header activeTasks={activeTasks} />

        <TaskInput
          onInputChange={this.onInputChange}
          pendingTask={this.state.pendingTask}
          addNewTask={this.addNewTask} />

        <TodoList
          tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
