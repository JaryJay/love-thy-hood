import { useState } from 'react';
import PostComponent from './PostComponent';

// Import images
import post1 from "../assets/1.png"
import post2 from "../assets/2.png"
import post3 from "../assets/3.png"

export interface Post {
  images: string[],
  caption: string,
  from: string,

  likes: string[],
  comments: string[],
}


const FeedPage = () => {
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

export default FeedPage;
