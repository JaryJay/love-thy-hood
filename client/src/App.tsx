import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Feed, DirectMessages, Post, Profile } from "./components";
import "./App.css";

/**
 * App routes.
 */
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path='/DirectMessages' element={<DirectMessages />} />
        <Route path='/Post' element={<Post />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
