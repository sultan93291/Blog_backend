const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routeHandler/routeHandler.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`listening on port  http://localhost:${process.env.PORT} `);
});
