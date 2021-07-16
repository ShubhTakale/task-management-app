import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";
import DisplayTasksComponent from "../components/DisplayTasksComponent";
import AddNewTaskComponent from "../components/AddNewTaskComponent"
function HomeContainer() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const history = useHistory();
  const headers = {
    token: sessionStorage.getItem("token"),
  };

  const getTasks = (url) => {
    if (url === "/tasks") setTitle("All Tasks");
    else if (url === "/tasks/today") setTitle(`Today's Tasks`);
    else if (url === "/tasks/in-progress") setTitle("In Progress Tasks");
    else setTitle("Completed Tasks");
    axios
      .get("http://localhost:5000" + url, { headers })
      .then((data) => {
        setTasks(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeleteTask= (id) => {
    axios.delete("http://localhost:5000/tasks/"+id,{headers}).then((response)=> {
      window.location.reload()
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getTasks("/tasks");
  }, []);

  if (headers.token == null) history.push("/");
  return (
    <div>
      <NavbarComponent />
      <div id="main">
        <SidebarComponent getTasks={getTasks} />
        {window.location.pathname === "/home/add-task" ? (
          <AddNewTaskComponent />
        ) : (
          <div className="Tasks">
            <DisplayTasksComponent tasks={tasks} title={title} onDeleteTask = {onDeleteTask} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeContainer;
