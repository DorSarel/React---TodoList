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

  componentDidMount = () => {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.length > 0) {
        const taskFromStorage = [];
        for(let index = 0; index < localStorage.length; index++){
          let taskObj = JSON.parse(localStorage.getItem(localStorage.key(index)));
          taskFromStorage.unshift(taskObj);
        }

        this.setState({
          tasks: taskFromStorage
        });
      }
    }
  }

  newTaskId = () => {
    const id = this.lastTaskId;
    this.lastTaskId += 1;
    return id;
  }

  saveTaskObjToLocalStorge = (id) => {
    const taskObj = {
      name: this.state.pendingTask,
      isTodo: true,
      isInProgress: false,
      isDone: false,
      createdAt: Date.now(),
      id
    }

    localStorage.setItem(id, JSON.stringify(taskObj));
  }

  updateLocalStorage = (id, task, isInProgress=true) => {
    if (isInProgress) {
      let updatedTaskObj = {
        ...task,
        isTodo: false,
        isInProgress: true
      }

      localStorage.setItem(id, JSON.stringify(updatedTaskObj));

    } else {
      let updatedTaskObj = {
        ...task,
        isInProgress: false,
        isDone: true
      }

      localStorage.setItem(id, JSON.stringify(updatedTaskObj));
    }
  }

  getActiveTasks = () => {
    return (
      this.state.tasks.reduce((total, task) => {
        return task.isInProgress ? total + 1 : total
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

    this.saveTaskObjToLocalStorge(id);

    //adding the new task
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

  setAs = (toList, id) => {
    if (toList === "progress") {
      this.setInProgress(id);
    } else {
      this.setAsCompleteId(id);
    }
  }

  setAsCompleteId = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (id === task.id) {
          this.updateLocalStorage(id, task, false);
          return {
            ...task,
            isInProgress: false,
            isDone: true
          };
        }

        return task;
      })
    });
  }

  setInProgress = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (id === task.id){
          this.updateLocalStorage(id, task, true);
          return {
            ...task,
            isTodo: false,
            isInProgress: true
          };
        }

        return task;
      })
    });
  }

  removeTaskFrom = (id) => {
    localStorage.removeItem(id);

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
          setAs={this.setAs}
          removeTaskFrom={this.removeTaskFrom} />

      </div>
    );
  }
}

export default App;
