const express = require("express");
const sequelize = require("./database");
const User = require("./User");

// init on database
sequelize.sync().then(() => console.log("DB is ready"));

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  User.create(req.body).then(() => {
    res.send("User is inserted");
  });
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
