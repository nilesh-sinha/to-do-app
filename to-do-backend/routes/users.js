const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const userName = req.query.user;
  User.find({ userName: userName })
    .then((payload) => res.status(200).json(payload))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res, next) => {
  const userName = req.body.userName;
  const newUser = new User({ userName });

  newUser
    .save()
    .then(() => {
      res.json("Added successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
