import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import SignupComponent from "../components/SignupComponent";

function SignupContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory()
  const onSignup = () => {
      
      const body = { fullName:name, contact:contactNumber, email, password } 
      const headers = {
        token: sessionStorage.getItem("token"),
      };
      axios.post("http://localhost:5000/user/signup",body,{headers}).then((resp) => {
          console.log(resp);
            history.push("/")
      }).catch((err) => {
          console.log(err);
      })
  }
  return (
    <SignupComponent
      setName={setName}
      setEmail={setEmail}
      setContactNumber={setContactNumber}
      password = {password}
      setPassword={setPassword}
      confirmPassword = {confirmPassword}
      setConfirmPassword={setConfirmPassword}
      onSignup = {onSignup}
    />
  );
}

export default SignupContainer;
