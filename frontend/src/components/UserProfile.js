import React from "react";
import "../Profile.css";
import { Avatar } from '@material-ui/core';

function UserProfile(props) {
    const{fullName, contact, email, id} = props
	return (
		<div className="card-container">
			<header>
                <Avatar classname = " avatar" src="/broken-image.jpg"  alt={fullName} />
			</header>
			<h1 className="bold-text">
				NAME: {fullName} 
			</h1>
            <h2 className="normal-text">ID: {id}</h2>
			<h2 className="normal-text">CONTACT: {contact}</h2>
			<h2 className="normal-text">EMAIL: {email}</h2>
            
		</div>
	);
}

export default UserProfile;
