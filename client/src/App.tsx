import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  FeedPage,
  PostPage,
  ProfilePage,
  LoginButton,
  LogoutButton,
} from "./components";
import "./App.css";

/**
 * App routes.
 */
const App = () => {
  return (
    <Router>
      <LoginButton />
      <LogoutButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
