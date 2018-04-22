import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ToDo App Component
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    this.bindFunc = this.addToDo.bind(this);

    this.state = {
      todos: [],
    }
  }

  // Callback func
  addToDo(newToDo) {
    this.setState({
      todos: this.state.todos.concat(newToDo),
    });
  }

  render() {
    return(
      <div>
        <div className="todo-app">
          <ToDoCreator
            addToDo={this.bindFunc}
          />
          <ToDoList
            todos={this.state.todos}
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
        isDone: true,
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
          <div className="input-group mb-3">
            <input type="text" className="form-control" value={this.state.text} onChange={e => {this.onChange(e)}} />
            <button type="button" className="btn btn-primary btn-lg btn-block createButton"
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

  createToDoList(todos) {
    console.log(todos);

    const todoList = todos.map((todo,i) => {
        return (
          <li key={i} className="list-group-item">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input" checked/>
                </div>
              </div>
              <input type="text" class="form-control" aria-label="Text input with checkbox" />
            </div>
            {todo.itemName}
          </li>
        );
      }
    );

    return(
      <div className="container">
        <h2>{this.state.areaTitle}</h2>
        <ul className="list-group">
          {todoList}
        </ul>
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