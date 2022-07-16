const { Post } = require("../models");

let PostEndpoints = {
  getAll: async (req, res) => {
    try {
      const allPosts = await Post.find();
      return res.status(200).json(allPosts);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  post: async (req, res) => {
    try {
      const newPost = new Post({ ...req.body });
      const insertedPost = await newPost.save();
      return res.status(201).json(insertedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      await Post.updateOne({ id }, req.body);
      const updatedPost = await Post.findById(id);
      return res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPost = await Post.findByIdAndDelete(id);
      return res.status(200).json(deletedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
  },
};

module.exports = PostEndpoints;
