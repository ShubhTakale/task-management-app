import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginComponent from "../components/LoginComponent";

function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const onLogin = () => {
    axios
      .post("http://localhost:5000/user/login", { email, password })
      .then((data) => {
          sessionStorage.setItem("token",data.data.data.token)
          history.push('/home')
      })
      .catch((err)=>{
          alert("Invalid credentials")
      });
  };
  useEffect(()=>{
    sessionStorage.removeItem("token")
  })

  // if (sessionStorage.getItem("token")!=null) {
  //   return <Redirect to="/tasks" />;
  // }
  return (
    <LoginComponent
      setEmail={setEmail}
      setPassword={setPassword}
      onLogin={onLogin}
    />
  );
}

export default LoginContainer;
