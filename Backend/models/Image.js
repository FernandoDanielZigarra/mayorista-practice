const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
    },
    urlImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
