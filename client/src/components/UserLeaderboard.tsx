import { ChangeEvent, useContext, useEffect, useState } from "react";
import ApiDataService from "../services/api.service";
import Post from "../types/post.type";
import { UserContext } from "../contexts/UserContext";
import Neighbourhood from "../types/neighbourhood.type";
import User from "../types/user.type";

const PostPage = () => {
  const [user, setUser] = useContext(UserContext);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const n = await ApiDataService.getNeighbourhood(user.neighbourhood);
      const u = [];
      for (const m of n.members) {
        u.push(await ApiDataService.getUser(m));
      }
      setUsers(u);
    })()
  }, [])

  if (!users.length) {
    return <div>No neighbourhoods found, please wait</div>
  }
  return (
    <div className="m-4 p-2 glass-morphism-1 text-white">
      {users.sort((a, b) => b.points - a.points).map((n, index) => (
        <div className="flex">
          {index === 0 ? <div className="flex-1 text-amber-400">{n.name}</div> : <div className="flex-1">{n.name}</div>}
          <div className="flex-1">{n.points}</div>
        </div>))}
    </div>
  );
};

export default PostPage;
