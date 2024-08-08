const Blog = require("../../models/BlogModel/BlogSchema.js");
const ConnectDb = require("../../ConnectDb/ConnectDb.js");

ConnectDb();

const createBlog = async (req, res) => {
  try {
    const allBlog = await Blog.find();

    res
      .status(200)
      .send(` Your created blogs are :  ${allBlog}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = createBlog;
