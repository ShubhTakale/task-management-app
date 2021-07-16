import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "../App.css";
import { useHistory } from "react-router";
import NavbarComponent from "./NavbarComponent";
import axios from 'axios'

function AddNewTaskComponent(props) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const headers = {
    token: sessionStorage.getItem("token"),
  };
  const onAddTask = () => {
    console.log("In add task");
    const body = { title, description, date };
    axios
      .post("http://localhost:5000/tasks", body, { headers })
      .then((resp) => {
        console.log(resp);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavbarComponent />
      <div className="background">
        <div className="add-task-form">
          <form>
            <div className="form-group">
              <label>Title</label>
              <CloseIcon
                className="close-icon"
                onClick={() => history.push("/home")}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="textarea"
                className="form-control"
                placeholder="Enter Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Select Date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="button">
              <button
                type="button"
                className="btn btn-primary btn-add-task"
                onClick={onAddTask}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewTaskComponent;
