import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ToDo App Component
class ToDoApp extends React.Component {
  render() {
    return(
      <div>
        <div className="todo-app">
          <ToDoCreator />
          <ToDoList />
        </div>
      </div>
    );
  }
}

// ToDo Creator Component
class ToDoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaTitle: "Create New Todo",
    }
  }
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h2>{this.state.areaTitle}</h2>
          <div className="input-group mb-3">
            <input type="text" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">Create</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ToDo List Component
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaTitle: "ToDo List",
      //todos: Array().fill(null),
      todos: ["hoge","hoge","hoge","hoge"],
    }
  }

  createToDoList(todos) {
    const todoList = todos.map((todo) => {
        return <li>{todo}</li>
      }
    );

    return(
      <ul>{todoList}</ul>
    );
  }

  render() {
    return(
      <div className="todo-list">
        {this.createToDoList(this.state.todos)}
      </div>
    );
  }
}

// ==============================================
ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);