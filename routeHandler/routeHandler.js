const express = require("express");
const router = express.Router();
const createBlog = require("./CreateBlogRoute/CreateBlogRoute.js");
const readBlog = require("./ReadBlogRoute/readBlogRoute.js");
const updateBlog = require("./updateBlogRoute/updateBlogRoute.js");
const deleteBlog = require("./deleteBlogRoute/deleBlogRoute.js");

router.get("/", (req, res) => {
  res.status(200).send("alhamdulillah working perfectly");
});

router.post("/create", createBlog);

router.get("/blogs", readBlog);

router.put("/update", updateBlog);

router.delete("/delete", deleteBlog);

module.exports = router;
