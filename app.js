//we configure everything that has to do with the express application

const express = require("express");
const accountRouter = require("./bankOps/accountRoutes");

const app = express();
//This enables you to get the requests made on the server in json format..........+
//all the middleware defined here are applied to all requests from the server......
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware 🔴");
  next();
});

app.use("/api/v1/accounts", accountRouter);

module.exports = app;
