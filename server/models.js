const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NeighbourhoodSchema = new Schema({
  name: { type: String, required: true },
  points: { type: Number, required: false, default: 0 },

  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    points: { type: Number, required: false, default: 0 },
    bio: { type: String, required: false, default: "" },

    neighbourhood: {
      type: Schema.Types.ObjectId,
      ref: "Neighbourhood",
    },
    posts: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Post",
        },
      ],
    },
  },
  { timestamps: true }
);

const PostSchema = new Schema(
  {
    files: [String],
    caption: { type: String, required: true },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        commenter: { type: Schema.Types.ObjectId, ref: "User" },
        text: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Neighbourhood = mongoose.model("Neighbourhood", NeighbourhoodSchema);
const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);

module.exports = { Neighbourhood, User, Post };
