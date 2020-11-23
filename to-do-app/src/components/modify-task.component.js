import React, { Component } from "react";
import { updateTodo } from "../shared/request.service";

export default class ModifyTaskComponent extends Component {
  state = {
    userName: "Nil2",
    title: "",
    content: "",
    priority: 4,
    status: "INCOMPLETE",
  };
  componentDidMount() {
    debugger;
    this.setState({
      title: this.props.title,
      content: this.props.title,
      priority: this.props.priority,
      status: this.props.status,
    });
  }
  updatePriority = (event) => {
    this.setState({
      priority: parseInt(event.target.value),
    });
  };
  updateStatus = (event) => {
    this.setState({
      status: event.target.value,
    });
  };
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  handleSave = (event) => {
    const payload = {
      userName: "Nil2",
      id: this.props._id,
      title: this.state.title,
      content: this.state.content,
      priority: this.state.priority,
      status: this.state.status,
    };
    updateTodo(payload).then((resp) => {
      if (resp.status === 200) {
        this.props.reloadData();
        alert("Updated Successfully!");
      }
    });
  };
  render() {
    return (
      <div>
        <div
          className="nav-link"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <img
            src="/pencil.svg"
            alt="Modify"
            className="plus-img"
            title="Update Task"
            style={{ height: "24px" }}
          />
        </div>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Update Task
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2 margin-b10"
                    onChange={this.handleTitleChange}
                    type="text"
                    placeholder="Title"
                    aria-label="Title"
                    value={this.state.title}
                  />
                  <input
                    className="form-control mr-sm-2 margin-b10"
                    onChange={this.handleContentChange}
                    type="text"
                    placeholder="Description"
                    aria-label="Description"
                    value={this.state.content}
                  />
                  <select
                    className="form-control mr-sm-2 margin-b10"
                    onChange={this.updatePriority}
                    value={this.state.priority}
                  >
                    <option value="4">None</option>
                    <option value="3">Low</option>
                    <option value="2">Moderate</option>
                    <option value="1">Immediate</option>
                  </select>
                  <select
                    className="form-control mr-sm-2 margin-b10"
                    onChange={this.updateStatus}
                    value={this.state.status}
                  >
                    <option value="INCOMPLETE">In Progress</option>
                    <option value="COMPLETE">Completed</option>
                  </select>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleSave}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
