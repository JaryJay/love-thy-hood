import { useState } from 'react';
import PostComponent from './PostComponent';
import Post from '../types/post.type'

// Import images
import post1 from "../assets/1.png"
import post2 from "../assets/2.png"
import post3 from "../assets/3.png"

// export interface Post {
//   images: string[],
//   caption: string,
//   from: string,

//   likes: User[],
//   comments: string[],
// }


const FeedPage = () => {
  const [postsState, setPost] = useState<Post[]>([
    {
      images: [post1],
      caption: "Yo",
      user: "69",
      userName: "Sean Wang",
      likes: [],
      comments: [],
    },
    {
      images: [post2],
      caption: "Happy Birthday [Ce][Sa]ra[h]!",
      user: "69",
      userName: "Leanne Kim",
      likes: [],
      comments: [{commenter: "💯✨🎉", text: "ok then"}],
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
              user={postsState.user}
              userName={postsState.userName}
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
