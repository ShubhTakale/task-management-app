import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import UserProfile from "../components/UserProfile";
import "../Profile.css";

function UserProfileContainer() {
  const[email,setEmail] = useState("");
  const [fullName, setFullName] = useState("")
  const [id, setId] = useState("")
  const [contact, setContact] = useState("")
  const headers = {
    token: sessionStorage.getItem("token"),
  };
  const getProfile = () => {
    console.log("getProfile called");
    axios
      .get("http://localhost:5000/user/profile", { headers })
      .then((resp) => {
        const {fullName,email,contact,id} = resp.data.data;
        setEmail(email)
        setFullName(fullName)
        setId(id)
        setContact(contact)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("use effect called");
    getProfile();
  }, [])
  //   console.log("user", user,"token",headers.token);
  return (
    <>
      <NavbarComponent />
      <div className="profile-card">
      <UserProfile
        fullName={fullName}
        contact={contact}
        email={email}
        id={id}
      />
      </div>
    </>
  );
}

export default UserProfileContainer;
