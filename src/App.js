import React, { Component } from 'react';
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import ListContainer from "./components/ListContainer";

class App extends Component {

  state = {
    pendingTask: "",
    tasks: []
  }

  lastTaskId = 0;

  newTaskId = () => {
    const id = this.lastTaskId;
    this.lastTaskId += 1;
    return id;
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
    const id = this.newTaskId();

    this.setState({
      pendingTask: "",
      tasks: [
        {
          name: this.state.pendingTask,
          isTodo: true,
          isInProgress: false,
          isDone: false,
          createdAt: Date.now(),
          id
        },
        ...this.state.tasks
      ]
    });
  }

  setAsCompleteId = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            isDone: !task.isDone
          };
        }

        return task;
      })
    });
  }

  removeTaskFrom = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.id !== id;
      })
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

        <ListContainer
          tasks={this.state.tasks}
          setAsCompleteId={this.setAsCompleteId}
          removeTaskFrom={this.removeTaskFrom} />

      </div>
    );
  }
}

export default App;
