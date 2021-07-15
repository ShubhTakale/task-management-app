const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("./config");
var cors = require('cors')

//list of routers
const routerUser = require("./routes/user");
const taskRouter = require('./routes/tasks')

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.use((request, response, next) => {
  //skip checking the token for following apis
  //signin and signup
  if (request.url == "/user/login" || request.url == "/user/signup") {
    next();
  } else {
    const token = request.headers.token
    console.log(token);
    try {
      const data = jwt.verify(token, config.secret);
      //add userid in the request so that is can be used in the  every api
      request.userId = data["id"];
      //call the next handler
      next();
    } catch (e) {
      response.send({
        status: "error",
        error: "unauthorised access",
      });
    }
  }
});

//add routers
app.use(routerUser);
app.use(taskRouter)

app.get("/", (request, response) => {
  response.send("Welcome to task management app");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server started on port 5000");
});
