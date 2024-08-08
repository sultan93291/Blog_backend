const Blog = require("../../models/BlogModel/BlogSchema.js");
const ConnectDb = require("../../ConnectDb/ConnectDb.js")

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

ConnectDb();
const createBlog = async (req, res) => {
  const { username, email, blog } = await req.body;
  console.log(username, email, blog);

  if (!username) {
    res.status(400).send("please provide a valid username");
  }
  if (!emailRegex.test(email)) {
    res.status(400).send("Invalid email syntax");
  }
  if (!blog) {
    res.status(400).send("Please write something to creae a new blog");
  }

  try {
    const newBlog = await Blog({
      username: username,
      email: email,
      blog: blog,
    });

    const savedBlog = await newBlog.save();


    res
      .status(200)
      .send(`successfully created a blog. your blog info is ${savedBlog}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = createBlog;
