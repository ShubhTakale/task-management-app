import React from "react";
import TaskComponent from "./TaskComponent";
import "../App.css";
import { useHistory } from "react-router";

function DisplayTasksComponent(props) {
  const { title, tasks, onDeleteTask} = props;
  const history = useHistory();
  const headers = {
    token: sessionStorage.getItem("token"),
  };
  const handleAddTask = () => {
    history.push("/home/add-task")
  };
  return (
    <>
      <div className="content">
        <div className="title">
          <h2>{title} </h2> 
          <span>Total: {tasks.length}</span>
        </div>
        <div className="button">
          <button className="btn btn-primary" onClick={handleAddTask}>
            +Add Task
          </button>
        </div>
      </div>
      <div className="tasky">
        <div className="tasky-content">
          {tasks &&
            tasks.map((task) => {
              return (
                <TaskComponent key={task.id} task={task} headers={headers} onDeleteTask = {onDeleteTask} />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default DisplayTasksComponent;
