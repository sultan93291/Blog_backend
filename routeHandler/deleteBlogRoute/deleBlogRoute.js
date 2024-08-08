const Blog = require("../../models/BlogModel/BlogSchema.js");
const ConnectDb = require("../../ConnectDb/ConnectDb.js");

ConnectDb();
const deletBlog = async (req, res) => {
  const { id } = await req.body;

  try {
    const isDeleted = await Blog.findByIdAndDelete(id);
    if (!isDeleted) {
      res.status(400).send("can't delete blog at the moment")
    }
    res
      .status(200)
      .send(` successfully deleted blog, ${isDeleted}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = deletBlog;
