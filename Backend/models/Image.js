const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    urlImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
