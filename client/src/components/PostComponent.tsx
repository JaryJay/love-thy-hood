import React, { useState } from 'react'
import Post from '../types/post.type'
import Comment from '../types/comment.type';
import User from '../types/user.type'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import userEvent from '@testing-library/user-event';

const CommentComponent = (props: Comment) => {
  return (
    <p><strong>{props.commenter}:</strong> {props.text}</p>
  );
}

const PostComponent = (props: Post) => {
  return (
    <li>
      <img src={props.images[0]} alt="post" />
      <p className="text-center px-5 rounded-md border-4 border-green-500 border-solid">{props.caption}</p>
      <p className="text-center px-5 borde width-5">Posted by: {props.userName}</p>
      <div className="text-center px-5 borde width-5 bg-teal-500">
        <span>{props.likes.includes(props.user) ? <AiFillHeart /> : <AiOutlineHeart />}</span>
        <p>Comments:</p>
        <CommentComponent text="Hello world" commenter="Your Mom" />
      </div>
      <br /><br />
    </li>
  );
}

export default PostComponent