import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ToDo App Component
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    this.bindFunc1 = this.addToDo.bind(this);
    this.bindFunc2 = this.changeStatus.bind(this);

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

  render() {
    return(
      <div>
        <div className="todo-app">
          <ToDoCreator
            addToDo={this.bindFunc1}
          />
          <ToDoList
            todos={this.state.todos}
            onClick={this.bindFunc2}
          />
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
      text: "",
    }
  }

  onChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  onClick = () => {
    this.props.addToDo(
      {
        itemName: this.state.text,
        status: false,
      }
    );
    this.setState({
      text: "",
    });
  };

  render() {
    return(
      <div className="container createToDoArea">
        <div className="jumbotron">
          <h2>{this.state.areaTitle}</h2>
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-secondary text-white">ToDo title</span>
            </div>
            <input type="text" id="inputToDoField" className="form-control" value={this.state.text}
              onChange={e => {this.onChange(e)}} />
            <button type="button" className="btn btn-primary btn-lg btn-block create-button"
              onClick={() => {this.onClick()}}>Create ToDo</button>
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
    }
  }

  renderItem(todo) {
    if(todo.status == true) {
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
              id={i} onClick={() => {this.props.onClick(i)}}>DONE</button>
            {this.renderItem(todo)}
            <button type="button" className="btn btn-danger todo-delete-button">DEL</button>
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

// ==============================================
ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);