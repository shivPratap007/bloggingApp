const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { checkToken } = require("./middleware/authentication");
const path = require("path");

const { blogModel } = require("./model/Blog");

const userRouter = require("./routes/User");
const blogRouter = require("./routes/AddBlog");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve("./uploads")));
// app.use(express.static('uploads'));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.get("/", checkToken, async (req, res) => {
  const allBlog = await blogModel.find({});
  console.log(allBlog);
  return res.render("home", {
    name: req.customdata.name.name,
    allBlog: allBlog,
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port no. 5000");
  console.log();
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Bloggify")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });
