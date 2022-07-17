import { useContext, useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import Post from "../types/post.type";

import { UserContext } from "../contexts/UserContext";
import ApiDataService from "../services/api.service";
import { NeighbourhoodLeaderboard, UserLeaderboard } from ".";

// Import images
import post1 from "../assets/1.png";
import post2 from "../assets/2.png";
import post3 from "../assets/3.png";

const FeedPage = () => {
  const [user, setUser] = useContext(UserContext);

  const [postsState, setPostsState] = useState<Post[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getPosts = async () => {
      const posts: Post[] = await (await ApiDataService.getPosts()).reverse();
      setPostsState(posts);
    };
    getPosts();
  }, []);

  return (
    // Members list in your neighborhood

    // Posts
    <div className="gradient-3 h-auto flex">
      <div className="flex-1 w-1/4">
        <NeighbourhoodLeaderboard />
      </div>
      <div className="flex-1 w-1/2">
        <ul>
          {
            // Render each post as a component based on the postsState array
            postsState.map((postsState, i) => (
              <div>
                <PostComponent post={postsState} />
                <br />
                <br />
              </div>
            ))
          }
        </ul>
      </div>
      <div className="flex-1 w-1/4">
        <UserLeaderboard />
      </div>
    </div>
  );
};

export default FeedPage;
