import React, { useState } from 'react'
import Post from '../types/post.type'
import Comment from '../types/comment.type';
import User from '../types/user.type'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import userEvent from '@testing-library/user-event';
import { Agent } from 'https';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const CommentComponent = (props: Comment) => {
  return (
    <p><strong>{props.commenter}:</strong> {props.text}</p>
  );
}

const PostComponent = ({ post, userName }: { post: Post, userName: string }) => {
  return (
    <li className="p-3 border-black border-2 border-solid rounded-lg">
      <p className="mb-3">{userName}</p>
      {post.files.length ? <img src={post.files[0]} alt="post" /> : "No image"}

      {/* Caption */}
      <p className="px-5 rounded-md border-4 border-green-500 border-solid">{post.caption}</p>
      <div className="px-5 borde width-5">
        {/* Like button */}
        <span className="mt-px">{post.likes.includes(post.user) ? <AiFillHeart /> : <AiOutlineHeart />}</span>
        {/* Comments */}
        <CommentComponent text="Hello world" commenter="Your Mom" />
      </div>
    </li>
  );
}

export default PostComponent;
