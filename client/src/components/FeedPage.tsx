import { useContext, useEffect, useState } from 'react';
import PostComponent from './PostComponent';
import Post from '../types/post.type'

import { UserContext } from "../contexts/UserContext";
import ApiDataService from "../services/api.service";

// Import images
import post1 from "../assets/1.png"
import post2 from "../assets/2.png"
import post3 from "../assets/3.png"


const FeedPage = () => {
  const user = useContext(UserContext);

  const [postsState, setPostsState] = useState<Post[]>([
    {
      files: [post1],
      caption: "Yo",
      user: "69",
      likes: [],
      comments: [],
    },
    {
      files: [post2],
      caption: "Happy Birthday [Ce][Sa]ra[h]!",
      user: "69",
      likes: [],
      comments: [{ commenter: "💯✨🎉", text: "ok then" }],
    }
  ]);

  useEffect(() => {
    const getPosts = async () => {
      const posts: Post[] = await ApiDataService.getPosts();
      setPostsState(posts);
    };
    getPosts();
  }, [])



  return (
    // Members list in your neighborhood


    // Posts
    <div className='gradient-3 h-auto'>
      <div className="m-auto w-1/3">
        <ul>
          {
            // Render each post as a component based on the postsState array
            postsState.map((postsState, i) => (
              <div>
                <PostComponent
                  post={postsState}
                  userName={"Jay Ren"}
                />
                <br /><br />
              </div>
            ))
          }
        </ul>
      </div>
    </div>

  );
};

export default FeedPage;
