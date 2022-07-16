import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  FeedPage,
  PostPage,
  ProfilePage,
  LoginButton,
  LogoutButton,
} from "./components";
import { useAuth0 } from "@auth0/auth0-react";
import UserType from "./types/user.type";
import ApiDataService from "./services/api.service";
import "./App.css";

/**
 * App routes.
 */
const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [currentUser, setCurrentUser] = useState<UserType>();

  useEffect(() => {
    if (isAuthenticated) {
      ApiDataService.getAllUsers().then((response) => {
        setCurrentUser(
          response.filter((u) => {
            return u.email === user!.email;
          })[0]
        );
      });
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <Router>
        <LogoutButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/profile" element={<ProfilePage user={null} />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <div>
        <LoginButton />
        <LogoutButton />
      </div>
    );
  }
};

export default App;
