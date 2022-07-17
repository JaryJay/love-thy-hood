const s3 = require('./s3.js');

require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const uri = process.env.URI;

app.use(cors());
app.use(express.json());

app.get('/s3Url', async (req, res) => {
  try {
    const url = await s3.generateUploadURL()
    res.status(200).json({ url })
  } catch (error) {
    console.log(error);
    res.status(500).send(error.toString());
  }
})

const Neighbourhoods = require("./endpoints/neighbourhood.js");
app.get("/neighbourhoods", Neighbourhoods.getAll);
app.get("/neighbourhoods/:id", Neighbourhoods.get);
app.post("/neighbourhoods", Neighbourhoods.post);
app.put("/neighbourhoods/:id", Neighbourhoods.put);
app.delete("/neighbourhoods/:id", Neighbourhoods.delete);

const Users = require("./endpoints/user.js");
app.get("/users", Users.getAll);
app.get("/users/:id", Users.get);
app.post("/users", Users.post);
app.put("/users/:id", Users.put);
app.delete("/users/:id", Users.delete);

const Posts = require("./endpoints/post.js");
app.get("/posts", Posts.getAll);
app.get("/posts/:id", Posts.get);
app.post("/posts", Posts.post);
app.put("/posts/:id", Posts.put);
app.delete("/posts/:id", Posts.delete);

const start = async () => {
  try {
    await mongoose.connect(uri);
    app.listen(5000, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
