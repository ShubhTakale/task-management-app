import React from "react";
import "../App.css";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import axios from "axios";
function TaskComponent({ task, headers, onDeleteTask }) {
  const changeTaskStatus = () => {
    axios
      .patch(
        "http://localhost:5000/tasks/change-status/" + task.id,
        {},
        { headers }
      )
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="card">
      <div className="title">
        {task.title}{" "}
        <DeleteIcon
          className="float-end"
          onClick={() => {
            onDeleteTask(task.id);
          }}
        />
      </div>

      <div className="description">{task.description}</div>
      <div className="date">
        <ScheduleIcon /> {task.date}{" "}
        {task.is_completed === 1 ? (
          <HourglassFullIcon className="float-end" onClick={changeTaskStatus} />
        ) : (
          <HourglassEmptyIcon
            className="float-end"
            onClick={changeTaskStatus}
          />
        )}
      </div>
    </div>
  );
}
export default TaskComponent;
