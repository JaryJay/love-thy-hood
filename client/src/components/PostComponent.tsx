import React, { useState } from 'react'
import Post from '../types/post.type'
import Comment from '../types/comment.type';
import User from '../types/user.type'
import { AiFillHeart, AiOutlineBorderLeft, AiOutlineHeart } from 'react-icons/ai'
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
    <div>
      <br></br>
      <li className="p-3 border-black glass-morphism-2 border-2 border-solid rounded-lg">
        <p className="mb-3" style={{fontWeight:"bold"}}>
          {userName}
          <span className="m-1" style={{position:"absolute", right:"20px"}}>
            {post.likes.includes(post.user) ? <AiFillHeart/> : <AiOutlineHeart/>} 
          </span>
        </p>
        <img src={post.images[0]} alt="post" />
        <br/>
        <p className="text-center px-5 rounded-md border-2 border-black">{post.caption}</p>
        <br/>
        <div className="px-5 width-5">
          <CommentComponent text="Hello world" commenter="Your Mom" />
          <br/>
        </div>
      </li>
    </div>
  );
}

export default PostComponent