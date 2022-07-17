import React, { useState, useEffect, useContext } from "react";
import Post from "../types/post.type";
import Comment from "../types/comment.type";
import User from "../types/user.type";
import {
  AiFillHeart,
  AiOutlineBorderLeft,
  AiOutlineHeart,
} from "react-icons/ai";
import userEvent from "@testing-library/user-event";
import { Agent } from "https";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import ApiDataService from "../services/api.service";
import { UserContext } from "../contexts/UserContext";

const CommentComponent = (props: Comment) => {
  return (
    <p>
      <strong>{props.commenter}:</strong> {props.text}
    </p>
  );
};

const PostComponent = ({ post }: { post: Post }) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <br></br>
      <li className="p-3 border-black glass-morphism-2 border-2 border-solid rounded-lg">
        <p className="mb-3" style={{ fontWeight: "bold" }}>
          {user.name}
          <span className="m-1" style={{ position: "absolute", right: "20px" }}>
            {post.likes.includes(post.user) ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </span>
        </p>
        <img className="mb-3" src={post.files[0]} alt="post" />
        <hr className="bg-black h-px border-none" />
        <div>
          <p
            className="mt-1 text-center px-5 rounded-md"
            style={{ fontWeight: "bold" }}
          >
            {post.caption}
          </p>
          <br />
          <div className="px-5 width-5">
            <CommentComponent text="Hello world" commenter="Your Mom" />
          </div>
        </div>
      </li>
    </div>
  );
};

export default PostComponent;
