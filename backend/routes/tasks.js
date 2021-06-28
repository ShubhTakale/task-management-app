const express = require("express");
const taskRouter = express.Router();
const db = require("../db");
const crypto = require("crypto-js");

taskRouter.get("/tasks", (request, response) => {
  const userId = request.userId;
  const statement = `select id, title, description,date, is_completed from tasks where user_id = '${userId}'`;

  db.execute(statement, (error, tasks) => {
    if (error) {
      response.send({
        status: "error",
        error: error,
      });
    } else {
      response.send({
        status: "success",
        data: tasks,
      });
    }
  });
});

taskRouter.get("/tasks/today", (request, response) => {
    const userId = request.userId;
    const statement = `select id, title, description,date, is_completed from tasks where user_id = '${userId}' and date = System.now()`;
  
    db.execute(statement, (error, tasks) => {
      if (error) {
        response.send({
          status: "error",
          error: error,
        });
      } else {
        response.send({
          status: "success",
          data: tasks,
        });
      }
    });
  });
taskRouter.post("/tasks", (request, response) => {
  const userId = request.userId;
  const { title, description, date } = request.body;
  const statement = `insert into tasks values(default, '${title}', '${description}', '${date}',false,'${userId}')`;

  db.execute(statement, (error, task) => {
    if (error) {
      response.send({
        status: "error",
        error: error,
      });
    } else {
      response.send({
        status: "success",
        data: task,
      });
    }
  });
});

taskRouter.delete("/tasks/:taskId", (request, response) => {
  const userId = request.userId;
  const taskId = request.params.taskId;
  const statement = `delete from tasks where id = '${taskId}' and user_id = '${userId}'`;

  db.execute(statement, (error, data) => {
    if (error) {
      response.send({
        status: "error",
        error: error,
      });
    } else {
      if (data.affectedRows == 0) {
        response.send({
          status: "error",
          error: "Task not available",
        });
      } else {
        response.send({
          status: "success",
          data: data,
        });
      }
    }
  });
});

taskRouter.patch("/tasks/change-status/:taskId", (request, response) => {
  const userId = request.userId;
  const taskId = request.params.taskId;
  const statement = `update tasks set is_completed = !is_completed where id = '${taskId}' and user_id = '${userId}'`;

  db.execute(statement, (error, data) => {
    if (error) {
      response.send({
        status: "error",
        error: error,
      });
    } else {
      if (data.affectedRows == 0) {
        response.send({
          status: "error",
          error: "Task not available",
        });
      } else {
        response.send({
          status: "success",
          data: data,
        });
      }
    }
  });
});
module.exports = taskRouter;
