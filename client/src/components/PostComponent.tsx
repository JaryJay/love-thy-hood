import React from 'react'
import { Post } from './FeedPage'


interface Comment {
    message: string;
    sender: any;
}
const CommentComponent = (props: Comment) => {
    return (
        <p><strong>{props.sender}:</strong> {props.message}</p>
    );
}

const PostComponent = (props: Post) => {
  return (
    <li>
      <img src={props.images[0]} alt="post" />
      <p className="text-center px-5 rounded-md border-4 border-green-500 border-solid">{props.caption}</p>
      <p className="text-center px-5 borde width-5">Posted by: {props.from}</p>
      <div className="text-center px-5 borde width-5">
        <p>Comments:</p>
        <CommentComponent message="Hello world" sender="Your Mom" />
      </div>
      <br /><br />
    </li>
  );
}

export default PostComponent