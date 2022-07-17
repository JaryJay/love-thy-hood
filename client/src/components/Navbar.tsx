import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout } = useAuth0();

  return (
    <div className="navigation w-full font-sans text-xl z-10 navbar-bg text-white-600">
      <nav className="navbar justify-content-center navbar-expand navbar-dark bg-black w-full" style={{height:70}}>
        <div className="w-full bg-black-600">
          <ul className="navbar-nav ml-auto flex flex-wrap items-start justify-start px-2 py-3">
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-blue-600 rounded-md px-2 py-2" 
              style = {{fontWeight:'bold', color: "white", alignSelf:'center', position:'absolute', left:"24%"}}>
                <NavLink className="nav-link p-3" to="/">
                  Feed
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-blue-600 rounded-md px-2 py-2" 
              style = {{fontWeight:'bold', color: "white", textAlign:'center', position:'absolute',left:"48%"}}>
                <NavLink className="nav-link p-3" to="/Post">
                  Post
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-3">
              <div className="duration-300 hover:bg-blue-600 rounded-md px-2 py-2" 
              style = {{fontWeight:'bold', color: "white", textAlign:'center', position:'absolute',left:"72%"}}>
                <NavLink className="nav-link p-3" to="/Profile">
                  Profile
                </NavLink>
              </div>
            </li>

            <button onClick={() => logout({ returnTo: window.location.origin })} 
            className="duration-300 hover:bg-green-500 rounded-md px-2 py-2" 
            style={{color: "white", fontSize:"15px", position:'absolute', left:'90%'}}>
              Log Out
            </button>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
