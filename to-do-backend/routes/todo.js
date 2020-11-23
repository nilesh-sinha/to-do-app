const express = require("express");
const ToDo = require("../models/todo.model");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  const userName = req.query.user;
  try {
    const list = await ToDo.find({ userName: userName }, (err, res) => {
      if (!err) {
        return res;
      } else {
        throw new Error(err);
      }
    });
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/add", async (req, res) => {
  const userName = req.body.userName;
  const title = req.body.title;
  const content = req.body.content;
  const priority = req.body.priority;
  const status = req.body.status;
  const newItem = new ToDo({ userName, title, content, priority, status });
  try {
    const list = await ToDo.insertMany(newItem, (err, res) => {
      if (!err) {
        return res;
      } else {
        throw new Error(err);
      }
    });
    res.status(200).json("Added successfully!");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/update", async (req, res) => {
  try {
    ToDo.findById(req.body.id, (err, element) => {
      element.title = req.body.title;
      element.content = req.body.content;
      element.priority = Number(req.body.priority);
      element.status = req.body.status;
      element.save(() => res.status(200).json("Updated Successfully"));
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/delete", async (req, res) => {
  try {
    console.log(req);
    const list = await ToDo.findByIdAndDelete(req.body.id, (err, res) => {
      if (!err) {
        return res;
      } else {
        throw new Error(err);
      }
    });
    res.status(200).json("Deleted successfully!");
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
