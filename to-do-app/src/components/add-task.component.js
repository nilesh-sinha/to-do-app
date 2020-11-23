import React, { Component } from "react";
import { addTodo } from "../shared/request.service";

export default class AddTaskComponent extends Component {
  state = {
    userName: "Nil2",
    title: "",
    content: "",
    priority: 4,
    status: "INCOMPLETE",
  };
  updatePriority = (event) => {
    this.setState({
      priority: parseInt(event.target.value),
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
    if (this.state.title.trim() === "") {
      alert("Please provide title");
    } else {
      const payload = {
        userName: "Nil2",
        title: this.state.title,
        content: this.state.content,
        priority: this.state.priority,
        status: "INCOMPLETE",
      };
      addTodo(payload).then((resp) => {
        if (resp.status === 200) {
          // const el = document.getElementById("addModalCenter");
          // const modal = Object.getOwnPropertyNames(el)
          //   .filter((n) => n.startsWith("jQuery"))
          //   .map((n) => el[n]["bs.modal"])
          //   .find((j) => j !== undefined);
          // modal.hide();
          alert("Added Successfully!");
        }
      });
      // .catchError((er) => {
      //   document.getElementById("addModalCenter").modal("hide");
      //   alert("Failed to save Please try again.");
      // });
    }
  };
  render() {
    return (
      <div>
        <div
          className="nav-link"
          data-toggle="modal"
          data-target="#addModalCenter"
        >
          <img
            src="/plus.svg"
            alt="Add"
            className="plus-img"
            title="Add New Task"
          />
        </div>
        <div
          className="modal fade"
          id="addModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Todo
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
                  />
                  <input
                    className="form-control mr-sm-2 margin-b10"
                    onChange={this.handleContentChange}
                    type="text"
                    placeholder="Description"
                    aria-label="Description"
                  />
                  <select
                    className="form-control mr-sm-2 margin-b10"
                    onChange={this.updatePriority}
                  >
                    <option value="4">None</option>
                    <option value="3">Low</option>
                    <option value="2">Moderate</option>
                    <option value="1">Immediate</option>
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
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
