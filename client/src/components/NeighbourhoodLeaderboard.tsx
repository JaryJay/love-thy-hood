import { ChangeEvent, useContext, useEffect, useState } from "react";
import ApiDataService from "../services/api.service";
import Post from "../types/post.type";
import { UserContext } from "../contexts/UserContext";
import Neighbourhood from "../types/neighbourhood.type";

const PostPage = () => {
  const [user, setUser] = useContext(UserContext);
  const [neighbourhoods, setNeighbourhoods] = useState<Neighbourhood[]>([]);

  useEffect(() => {
    ApiDataService.getNeighbourhoods().then(d => setNeighbourhoods(d));
  }, [])

  if (!neighbourhoods.length) {
    return <div>No neighbourhoods found, please wait</div>
  }
  return (
    <div className="m-4 p-2 glass-morphism-1 text-white">
      {neighbourhoods.sort((a, b) => b.points - a.points).map((n, index) => (
        <div className="flex">
          {index === 0 ? <div className="flex-1 text-amber-400">{n.name}</div> : <div className="flex-1">{n.name}</div>}
          <div className="flex-1">{n.points}</div>
        </div>))}
    </div>
  );
};

export default PostPage;
