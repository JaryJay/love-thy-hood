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
import logo from "./components/logo.png";


/**
 * App routes.
 */
const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const [currentUser, setCurrentUser] = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState<UserType>({} as UserType);
  const [neighbourhood, setNeighbourhood] = useState<string>('');

  const [needToCreateUser, setNeedToCreateUser] = useState<boolean>();
  const { loginWithRedirect } = useAuth0();

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
      <div className="gradient-3 h-screen">
        <img src={logo} alt="Logo" style={{position:"absolute", left:"33%", top:"10%"}}/>
        <br/> <br/> <br/> <br/> <br/> <br/>
        <p style={{color:"black", fontSize:"40px", fontWeight:"bold", textAlign:"center"}}>NeighborHood</p>
        <button onClick={() => loginWithRedirect()} 
        className="duration-300 hover:bg-black border-black glass-morphism-1 border-2 border-solid rounded-lg px-2 py-2" 
        style={{color: "white", fontSize:"20px", position:'absolute', alignItems:"center",width:"300px", left:'40%',top:'60%'}}>Log In</button>
      </div>
    );
  }
};

export default App;
