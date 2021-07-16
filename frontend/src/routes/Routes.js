import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import '../App.css'
import HomeContainer from "../containers/HomeContainer";
import AddNewTaskComponent from "../components/AddNewTaskComponent";
import UserProfileContainer from "../containers/UserProfileContainer";

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/home" component={HomeContainer} />
        <Route exact path="/home/add-task" component={AddNewTaskComponent} />
        <Route exact path="/user/profile" component={UserProfileContainer} />
      </Switch>
  );
}

export default Routes;
