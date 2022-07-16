import { useState } from 'react';
import post1 from "../assets/1.png"
import post2 from "../assets/2.png"
import post3 from "../assets/3.png"

interface Post {
  images: string[],
  caption: string,
  from: string,

  likes: string[],
  comments: string[],
}

const PostComponent = (props: Post) => {
  return (
    <li>
      <img src={props.images[0]} alt="post" />
      <p className="text-center px-5 rounded-md border-4 border-green-500 border-solid">{props.caption}</p>
      <p className="text-center px-5 borde width-5">Posted by: {props.from}</p>
      <div className="text-center px-5 borde width-5">Comments: {
        props.comments.map((comment, i) => (
          <p>{comment}</p>
        ))
      }</div>
      <br /><br />
    </li>
  )
}

const Feed = () => {
  const [postsState, setPost] = useState<Post[]>([
    {
      images: [post1],
      caption: "Yo",
      from: "Sean Wang",
      likes: [],
      comments: [],
    },
    {
      images: [post2],
      caption: "Happy Birthday [Ce][S]ara[h]!",
      from: "Leanne Kim",
      likes: [],
      comments: ["💯✨🎉"],
    }
  ]);
  
  return (
    // Members list in your neighborhood
    

    // Posts
    <div className="w-1/2 bg-blue-500">
      <ul>
        {
          // Render each post as a component based on the postsState array
          postsState.map((postsState, i) => (
            <PostComponent 
              images={postsState.images}
              caption={postsState.caption}
              from={postsState.from}
              likes={postsState.likes}
              comments={postsState.comments}
            />
          ))
        }
      </ul>
    </div>


  );
};

export default Feed;
