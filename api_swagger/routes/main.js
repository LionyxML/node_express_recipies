const express = require("express");

const router = express.Router();

router.get("/", (_, res) => {
  res.send("Hello there! :)");
});

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res
        .status(400)
        .send("Missing parameters. You must send email and password.");
    } else {
      res.status(200).send("OK");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/data", (_, res) => {
  res.json({ title: "Data", content: "Something something." });
});

module.exports = router;
