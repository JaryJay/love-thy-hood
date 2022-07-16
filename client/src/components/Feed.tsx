import { useState } from 'react';
import post1 from "../assets/1.png"
import post2 from "../assets/2.png"
import post3 from "../assets/3.png"

interface Post {
  images: string[],
  caption: string,
  from: string,
}


const Feed = () => {
  const [postsState, setPost] = useState<Post[]>([
    {
      images: [post1],
      caption: "Yo",
      from: "Sean Wang",
    },
    {
      images: [post2],
      caption: "Happy Birthday [Ce][S]ara[h]!",
      from: "Leanne Kim",
    }
  ]);

  // Render each post in the postsState array
  const posts = postsState.map((postsState, i) => {
    return (
      // Get the border 
      <li key={i}>
        <img src={postsState.images[0]} alt="post" className="w-1/2 m-auto" />
        <p className="text-center m-auto w-1/2 px-5 rounded-md border-4 border-green-500 border-solid">{postsState.caption}</p>
        <p className="text-center m-auto px-5 borde width-5">Posted by: {postsState.from}</p>
        <br /><br />
      </li>
    );
  });
    
  return (
    <div>
      <ul>
        {posts}
      </ul>
    </div>
  );
};

export default Feed;
