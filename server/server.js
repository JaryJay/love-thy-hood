require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");

const { Neighbourhood, User, Post } = require("./models");

const app = express();
const uri = process.env.URI;

app.use(express.json());

app.get("/neighbourhoods", async (req, res) => {
  try {
    const allNeighbourhoods = await Neighbourhood.find();
    return res.status(200).json(allNeighbourhoods);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.get("/neighbourhoods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const neighbourhood = await Neighbourhood.findById(id);
    return res.status(200).json(neighbourhood);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.post("/neighbourhoods", async (req, res) => {
  try {
    const newNeighbourhood = new Neighbourhood({ ...req.body });
    const insertedNeighbourhood = await newNeighbourhood.save();
    return res.status(201).json(insertedNeighbourhood);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.put("neighbourhoods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Neighbourhood.updateOne({ id }, req.body);
    const updatedNeighbourhood = await Neighbourhood.findById(id);
    return res.status(200).json(updatedNeighbourhood);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.delete("/neighbourhoods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNeighbourhood = await Neighbourhood.findByIdAndDelete(id);
    return res.status(200).json(deletedNeighbourhood);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    const insertedUser = await newUser.save();
    return res.status(201).json(insertedUser);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.put("users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.updateOne({ id }, req.body);
    const updatedUser = await User.findById(id);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.get("/posts", async (req, res) => {
  try {
    const allPosts = await Post.find();
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.post("/posts", async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    const insertedPost = await newPost.save();
    return res.status(201).json(insertedPost);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.put("posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Post.updateOne({ id }, req.body);
    const updatedPost = await Post.findById(id);
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    return res.status(200).json(deletedPost);
  } catch (error) {
    return res.status(500).send("An unknown error occured.");
  }
});

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
