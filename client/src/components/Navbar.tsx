import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation w-full font-sans text-xl z-10 navbar-bg text-white">
      <nav className="navbar navbar-expand navbar-dark bg-dark w-full">
        <div className="w-full bg-orange-500">
          <ul className="navbar-nav ml-auto flex flex-wrap items-start justify-start px-2 py-3 align-items-center">
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-orange-600 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/">
                  Feed
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-orange-600 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/DirectMessages">
                  Direct messages
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-orange-600 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/Post">
                  Post
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-orange-600 rounded-md px-2 py-2">
                <NavLink className="nav-link p-3" to="/Profile">
                  Profile
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
