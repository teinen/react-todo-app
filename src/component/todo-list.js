import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

// ToDo List Component
export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaTitle: "ToDo List",
    }
  }

  renderItem(todo) {
    if(todo.status === true) {
      return (
        <span className="todo-item finished">
          <del>{todo.itemName}</del>
        </span>
      );
    } else {
      return (
        <span className="todo-item">
          {todo.itemName}
        </span>
      );
    }
  }

  createToDoList(todos) {
    const todoList = todos.map((todo,i) => {
        return (
          <li key={i} className="list-group-item align-middle">
            <button type="button" className="btn btn-success todo-check-button"
              id={i} onClick={() => {this.props.changeStatus(i)}}>DONE</button>
            {this.renderItem(todo)}
            <button type="button" className="btn btn-danger todo-delete-button"
              onClick={() => {this.props.deleteToDo(i)}}>DEL</button>
          </li>
        );
      }
    );

    return(
      <div>
        <h2>{this.state.areaTitle}</h2>
        <div className="container todo-list-content">
          <ul className="list-group">
            {todoList}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="todo-list">
        {this.createToDoList(this.props.todos)}
      </div>
    );
  }
}