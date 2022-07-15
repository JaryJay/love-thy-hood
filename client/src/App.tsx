import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Feed, DirectMessages } from "./components";
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
      </Routes>
    </Router>
  );
};

export default App;
