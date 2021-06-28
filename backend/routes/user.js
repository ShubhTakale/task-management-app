const express = require("express");
const userRouter = express.Router();
const db = require("../db");
const crypto = require("crypto-js");
const jwt = require('jsonwebtoken')
const config = require('../config')

userRouter.get("/user/profile", (request, response) => {
    const id = request.userId;

    const statement = `select id, fullName, contact, email from users where id = '${id}'`;
    db.execute(statement, (error, users) => {
      const result = { status: "" };
  
      if (error) {
        result["status"] = "error";
        result["error"] = error;
      } else {
        if (users.length == 0) {
          result["status"] = "error";
          result["error"] = "User does not exist";
        } else {
          result["status"] = "success";
          result["data"] = users[0];
        }
      }
  
      response.send(result);
    });
  
 
});

userRouter.post("/user/signup", (request, response) => {
  const { fullName, contact, email, password } = request.body;

  //encrypt the pwd
  const encryptedPassword = "" + crypto.SHA256(password);
  const statement = `insert into users values(default,"${fullName}","${contact}","${email}","${encryptedPassword}")`;

  db.execute(statement, (error, data) => {
    const result = {
      status: "",
    };

    if (error) {
      result["status"] = "error";
      result["error"] = error;
    } else {
      result["status"] = "success";
      result["data"] = data;
    }
    response.send(result);
  });
});

userRouter.post("/user/login", (request, response) => {
  const { email, password } = request.body;
  const encryptedPassword = "" + crypto.SHA256(password);
  const statement = `select id, fullName, contact, email from users where email='${email}' and password='${encryptedPassword}'`;

  db.execute(statement, (error, users) => {
    const result = {
      status: "",
    };

    if (error) {
      result["status"] = "error";
      result["error"] = error;
    } else {
      if (users.length == 0) {
        result["status"] = "error";
        result["error"] = "User does not exist";
      } else {
        const token = jwt.sign({ id: users[0]["id"] }, config.secret);
        result["status"] = "success";
        result["data"] = { ...users[0], token: token };
      }
    }
    response.send(result);
  });
});

module.exports = userRouter;
