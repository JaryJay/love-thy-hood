import { useState } from 'react';

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
    <div>
      <p>bow chicka wow wow</p>
    </div>
  );
};

export default Feed;
