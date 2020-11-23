import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import AddTaskComponent from "./components/add-task.component";
import CompletedTasksComponent from "./components/completed-tasks.component";
// import ModifyTaskComponent from "./components/modify-task.component";
import PendingTasksComponent from "./components/pending-tasks.component";
import Header from "./shared/header.component";

export default class App extends Component {
  // componentDidMount() {
  //   // const dispatch = useDispatch();
  //   getTodoList("Nil2")
  //     .then((response) => {
  //       this.props.store.dipatch(FetchList(response.data));
  //       // dispatch(FetchList(response));
  //       // FetchList(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <Router>
        <div className="container-fluid no-padding" style={{ padding: "0px" }}>
          <Header />
        </div>
        <Route path="/" exact component={PendingTasksComponent} />
        <Route path="/tasks" component={PendingTasksComponent} />
        <Route path="/completed" component={CompletedTasksComponent} />
        {/* <Route path="/add" component={AddTaskComponent} /> */}
        {/* <Route path="/add/:id" component={ModifyTaskComponent} /> */}
      </Router>
    );
  }
}
