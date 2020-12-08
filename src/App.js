import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {TasksPage} from "./Components/TasksPage";
import {EditPage} from "./Components/EditPage";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'Tasks',
      taskId: null
    }
  }

  navigate = (page, taskId = null) => {
    this.setState({page: page, taskId: taskId})
  }

  render () {
    if (this.state.page === 'Edit') {
      return <EditPage taskId={this.state.taskId} navigate={this.navigate}/>
    } else {
      return <TasksPage navigate={this.navigate}/>
    }
  }
}

export default App;
