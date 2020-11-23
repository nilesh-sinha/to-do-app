const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
