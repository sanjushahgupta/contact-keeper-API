const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");

connectDB();

//init middleware
app.use(express.json({ extended: true }));

app.get("/", (req, res) => res.json({ msg: "Welcome to the JobManage API." }));

//define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));

app.listen(PORT, () => {
  console.log("Server started.");
});
