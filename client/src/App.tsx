import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  FeedPage,
  PostPage,
  ProfilePage,
  LoginButton,
  LogoutButton,
  CreateUser,
} from "./components";
import { useAuth0 } from "@auth0/auth0-react";
import ApiDataService from "./services/api.service";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import UserType from "./types/user.type";
import User from "./types/user.type";

/**
 * App routes.
 */
const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const [currentUser, setCurrentUser] = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState<UserType>({} as UserType);
  const [neighbourhood, setNeighbourhood] = useState<string>('');

  const [needToCreateUser, setNeedToCreateUser] = useState<boolean>();

  useEffect(() => {
    if (isAuthenticated) {
      const f = async () => {
        const newUser: UserType = {
          name: user!.name!,
          email: user!.email!,
          neighbourhood: '',
          points: 0,
          bio: '',
          posts: []
        }
        // ApiDataService.createUser(newUser,)
        const allUsers = await ApiDataService.getAllUsers();
        if (allUsers.filter((u) => u.email === user!.email).length) {
          setCurrentUser(allUsers.filter((u) => u.email === user!.email)[0]);
          setNeedToCreateUser(false);
        } else {
          setNeedToCreateUser(true);
        }
      }
      f();
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    if (needToCreateUser === undefined) {
      return (<div>Loading...</div>)
    } else if (needToCreateUser) {
      return (<CreateUser onSubmit={(user: User) => {
        console.log("User submittecd: ", user)
        setCurrentUser(user);
        setNeedToCreateUser(false);
      }} />)
    }
    return (
      <Router>
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
          <Navbar />
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    );
  } else {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }
};

export default App;
