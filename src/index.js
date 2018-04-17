import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ToDo App Component
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createToDoArea: "Add New ToDo",
      displayToDoListArea: "ToDo List",
    }
  }

  render() {
    return(
      <div>
        <div className="todo-app">
          <h2>{this.state.createToDoArea}</h2>
          <ToDoCreator />

          <h2>{this.state.displayToDoListArea}</h2>
          <ToDoList />
        </div>
      </div>
    );
  }
}

// ToDo Creator Component
class ToDoCreator extends React.Component {
  render() {
    return(
      <div>

      </div>
    );
  }
}

// ToDo List Component
class ToDoList extends React.Component {
  render() {
    return(
      <div>
        
      </div>
    );
  }
}

// ==============================================
ReactDOM.render(
  <ToDoApp />,
  document.getElementById('root')
);