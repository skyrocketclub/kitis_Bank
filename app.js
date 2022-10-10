//we configure everything that has to do with the express application

const express = require("express");
const accountRouter = require("./bankOps/accountRoutes");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the middleware 🔴");
  next();
});

app.use("/api/v1/accounts", accountRouter);

module.exports = app;
