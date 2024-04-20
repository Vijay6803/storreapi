const express = require("express");

const app = express();
const port = 3000;
const tasks = require("./routes/task");
const connectDB = require("./db/connection");
app.use(express.json());
app.use(express.static("./public"));
// app.get("/hello", (req, res) => {
//   res.send("<h1>Hello world welcome to the task manager api </h1>");
// });
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(port, `server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
