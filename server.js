//We do the setup of the application here...

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection successful!");
  });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
