const Blog = require("../../models/BlogModel/BlogSchema.js");
const ConnectDb = require("../../ConnectDb/ConnectDb.js");

ConnectDb();
const updateBlog = async (req, res) => {
  const { username, email, blog, id } = await req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        username: username,
        email: email,
        blog: blog,
      },
      { new: true }
    );

    const savedBlog = await updatedBlog.save();

    if (!savedBlog) {
      res.status(400).status("can't update blog at the moment");
    }

    res
      .status(200)
      .send(` successfully updated your blog. your blog info is ${savedBlog}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = updateBlog;
