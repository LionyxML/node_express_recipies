const express = require("express");
const sequelize = require("./database");
const User = require("./User");

// init on database
sequelize.sync({ force: true }).then(() => console.log("DB is ready"));

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  await User.create(req.body);
  res.send("User is inserted");
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const requestedId = req.params.id;
  const user = await User.findOne({ where: { id: requestedId } });
  res.send(user);
});

app.put("/users/:id", async (req, res) => {
  const requestedId = req.params.id;
  const user = await User.findOne({ where: { id: requestedId } });
  user.username = req.body.username;
  await user.save();
  res.send("Updated");
});

app.delete("/users/:id", async (req, res) => {
  const requestedId = req.params.id;
  await User.destroy({ where: { id: requestedId } });
  res.send("Removed");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
