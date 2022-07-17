import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Neighbourhood from "../types/neighbourhood.type";
import ApiDataService from "../services/api.service";
import UserType from "../types/user.type";

const CreateUserPage = ({ onSubmit }: { onSubmit: Function }) => {
  const { user } = useAuth0();
  const [neighbourhoods, setNeighbourhoods] = useState<Neighbourhood[]>([]);
  const [selected, setSelected] = useState("");
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const getNeighbourhoods = async () => {
      setNeighbourhoods(await ApiDataService.getNeighbourhoods());
    }
    getNeighbourhoods();
  }, [])

  const handleJoinNeighbourhood = async () => {
    if (!selected) {
      alert("You must select a neighbourhood.");
      return;
    }
    const newUser: UserType = {
      name: user!.name!,
      email: user!.email!,
      neighbourhood: selected,
      points: 0,
      bio: '',
      posts: []
    }
    const createdUser: UserType = await ApiDataService.createUser(newUser, selected);
    onSubmit(createdUser);
  }

  const handleCreateNewNeighbourhood = async () => {
    console.log(user);

    if (!newName) {
      alert("You need to input a neighbourhood name.");
      return;
    }
    const newNeighbourhood = await ApiDataService.createNeighbourhood({ name: newName, points: 0, members: [] });
    console.log(newNeighbourhood);
    const newUser: UserType = {
      name: user!.name!,
      email: user!.email!,
      neighbourhood: newNeighbourhood._id!,
      points: 0,
      bio: '',
      posts: []
    }
    try {
      const createdUser: UserType = await ApiDataService.createUser(newUser, newUser.neighbourhood);
      console.log("Successfully created user: ", createdUser)
      onSubmit(createdUser);
    } catch (error: any) {
      alert("Something went wrong. Maybe try a different neighbourhood name?\nError message: " + error.message);
    }
  }

  return (
    <div>
      <label>Select neighbourhood
        <select name="neighbourhoods" id="neighbourhoods" defaultValue={selected} onChange={e => setSelected(e.target.value)}>
          {neighbourhoods.map(n => (<option value={n._id} key={n._id!}>{n.name}</option>))}
        </select>
      </label>
      <button onClick={handleJoinNeighbourhood}>Join</button>
      <label>Or create a new one
        <input name="newNeighbourhoodName" value={newName} onChange={e => setNewName(e.target.value)} />
      </label>
      <button onClick={handleCreateNewNeighbourhood}>Create</button>
    </div>
  )
};

export default CreateUserPage;
