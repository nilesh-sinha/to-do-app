import React, { Component } from "react";
import { deleteTodo, getTodoList } from "../shared/request.service";
import ModifyTaskComponent from "./modify-task.component";
import { NameMaps } from "../shared/utilities";
import AddTaskComponent from "./add-task.component";

export default class PendingTasksComponent extends Component {
  state = {
    todoItems: [],
    sortOptions: Object.keys(NameMaps),
    selectedSortMethod: Object.keys(NameMaps)[0],
    filterText: "",
  };
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getTodoList("Nil2")
      .then((response) => {
        // FetchList(response.data);
        const filteredData = response.data
          ? response.data.filter((d) => d.status === "INCOMPLETE")
          : [];
        this.setState({
          todoItems: filteredData,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  };

  updateSort = (e) => {
    const key = e.target.value
      ? NameMaps[e.target.value]
      : NameMaps[this.state.selectedSortMethod];
    const sortedData = this.state.todoItems.sort((a, b) => {
      if (key === "title") {
        return a[key].toString().localeCompare(b[key].toString());
      } else if (key === "priority") {
        return a.priority - b.priority;
      } else {
        return new Date(b[key]) - new Date(a[key]);
      }
    });
    this.setState({
      todoItems: sortedData,
      selectedSortMethod: e.target.value,
    });
  };
  handleDelete = (id) => {
    deleteTodo(id).then((response) => {
      if (response.status === 200) {
        this.loadData();
        alert(response.data);
      }
    });
  };
  filterData = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    return (
      <div className="margin-20 padding-hor25">
        <div className="col-12 padding-hor25 margin-l10 flex-display">
          <div style={{ flex: 2 }} className="flex-display">
            <h2 className="margin-r10 ">Your ToDo Items</h2>
            <AddTaskComponent />

            <input
              className="form-control mr-sm-2 small-search "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.filterData}
            />
            <select
              className="form-control small-search"
              onChange={this.updateSort}
            >
              {this.state.sortOptions.map((value, index) => {
                return (
                  <option
                    className={"dropdown-item "}
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
        <div className="margin-20">
          <div className="col-12">
            {this.state.todoItems
              .filter(
                (da) =>
                  da.title
                    .toLocaleLowerCase()
                    .includes(this.state.filterText) ||
                  da.content.toLocaleLowerCase().includes(this.state.filterText)
              )
              .map((obj, index) => {
                return (
                  <div
                    className={
                      "col-sm-12 margin-b10 todo-item priority-" + obj.priority
                    }
                    key={obj._id}
                  >
                    <div className="row">
                      <div className="col-sm-12 col-md-9 title flex-display">
                        <h3>{obj.title}</h3>
                        {"    "}
                        <ModifyTaskComponent
                          {...obj}
                          reloadData={this.loadData}
                        />
                        {"    "}
                        <div className="nav-link">
                          <img
                            src="/trash.svg"
                            alt="Modify"
                            className="plus-img"
                            title="Delete Task"
                            style={{ height: "24px" }}
                            onClick={() => this.handleDelete(obj._id)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-3 date">
                        {new Date(obj.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="row padding-hor25 margin-t10">
                      <div className="col-12">{obj.content}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
// [
//   {
//     "_id": "5fb959f6a608f239d92db408",
//     "userName": "Nil2",
//     "title": "Test Entry 2200",
//     "content": "",
//     "priority": 4,
//     "status": "INCOMPLETE",
//     "__v": 0,
//     "createdAt": "2020-11-21T18:18:30.519Z",
//     "updatedAt": "2020-11-21T18:56:03.438Z"
//   }
// ]
