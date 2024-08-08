const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const BlogSchema = new Schema(
  {
    username: {
      required: true,
      min: 5,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    blog: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = models.blog || mongoose.model("blog", BlogSchema);
