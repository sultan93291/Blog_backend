const mongoose = require("mongoose");

let isConnected = false;
const ConnectDb = async () => {
  if (isConnected) {
    console.log("Already connected to the database");
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Blog_App",
    });
    isConnected = true;
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Couldn't connect to the database");
  }
};

module.exports = ConnectDb