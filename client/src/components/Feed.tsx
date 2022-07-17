import { useState } from 'react';
import logo from "./logo.png";

interface Post {
  images: string[],
  caption: string,
  from: string,
}

const Feed = () => {
  const [post, setPost] = useState<Post>({
    images: [],
    caption: "",
    from: "",
  });

  
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <img src={logo} alt="logo"/>
    </div>

  );
};

export default Feed;
