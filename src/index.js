import React from 'react';
import ReactDOM from 'react-dom';

import ToDoCreator from './component/todo-creator.js';
import ToDoList from './component/todo-list.js';

import './index.css';

// ToDo App Component
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    // bimd each function
    this.bindAddToDoFunc = this.addToDo.bind(this);
    this.bindChangeStatusFunc = this.changeStatus.bind(this);
    this.bindDeleteToDoFunc = this.deleteToDo.bind(this);

    this.state = {
      todos: [
        {
          itemName: "sample ToDo 1",
          status: false,
        },
        {
          itemName: "sample ToDo 2",
          status: false,
        },
      ],
    }
  }

  // Callback function
  // Add new ToDo
  addToDo(newToDo) {
    this.setState({
      todos: this.state.todos.concat(newToDo),
    });
  }

  // Change ToDo Status (true <=> false)
  changeStatus(i) {
    const todos = this.state.todos.slice();
    todos[i].status = !todos[i].status;

    var checkButton = document.getElementById(i);

    if(todos[i].status === true) {
      checkButton.classList.remove("btn-success");
      checkButton.classList.add("btn-secondary");
    } else {
      checkButton.classList.remove("btn-secondary");
      checkButton.classList.add("btn-success");
    }

    this.setState({
      todos: todos,
    });
  }

  // Delete ToDo
  deleteToDo(i) {
    const todos = this.state.todos.slice();

    // delete target todo
    todos.splice(i, 1);

    this.setState({
      todos: todos,
    });
  }

  render() {
    return(
      <div>
        <div className="todo-app">
          <ToDoCreator
            addToDo={this.bindAddToDoFunc}
          />
          <ToDoList
            todos={this.state.todos}
            changeStatus={this.bindChangeStatusFunc}
            deleteToDo={this.bindDeleteToDoFunc}
          />
        </div>
      </div>
    );
  }
}

// ==============================================
ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);