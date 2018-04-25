import React from 'react';

// ToDo Creator Component
export default class ToDoCreator extends React.Component {
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