const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

// Init app
const app = express();

// Middlewares
// Form Data Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Static Directory
app.use(express.static(path.join(__dirname, "public")));

// Passport Middleware
app.use(passport.initialize());

// Passport Strategy
require("./config/passport")(passport);

// Database Config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch((err) => {
    console.log(`Unable to connect with the database ${err}`);
  });

app.get("/", (req, res) => {
  return res.send(
    "<h2>This is an API server you are not seeing this msg (Shhhhh!)</h2>"
  );
});

const users = require("./routes/api/users");
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
