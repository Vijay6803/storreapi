const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://sahil2122:sarika4347@nodeexpress.1rbbx5r.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";
const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
