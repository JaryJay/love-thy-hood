import { useState } from 'react';
import { setConstantValue } from 'typescript';
import post1 from "../assets/1.png"

interface Post {
  images: string[],
  caption: string,
  from: string,
}
const Feed = () => {
  const [postsState, setPost] = useState<Post[]>([{
    images: ["../assets/1.png"],
    caption: "Yo",
    from: "",
  }]);

  const posts = postsState.map((postsState, i) => {
    console.log(i);
    return (
      <li key={i} className="text-orange-500 bg-cyan-500 px-5 border-3 border-green-500 border-solid">
        {/* <img src="../assets/1.png">Post</img> */}
        <p>{postsState.caption}</p>
      </li>
    );
  });
    
  return (
    <div>
      <p>bow chicka wow wow</p>
      <ul>
        <img src={post1} alt="post" className="w-3/4 m-auto" />
        {posts}
      </ul>
    </div>
  );
};

export default Feed;
