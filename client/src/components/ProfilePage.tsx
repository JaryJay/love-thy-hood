import React, { useState, useContext } from "react";
import UserType from "../types/user.type";
import { FaUser } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import pfp from "./pfp.png";

const ProfilePage = () => {
  const [user, setUser] = useContext(UserContext);
  const [profile, setProfile] = useState<UserType>();

  return (
    <div className="gradient-2 h-screen">
      {/* Profile details (pfp + details) */}
      <div
        className="absolute mr-auto ml-auto right-0 left-0 top-32"
        style={{
          width: 600,
          height: 250,
        }}
      >
        {/* Profile Picture */}
        <div className="absolute top-0 bottom-0 left-0" style={{width: "250px"}}>
          <div style={{
            position: "absolute",
            top: "10%",
            bottom: "10%",
            left: "10%",
            right: "10%",
          }}>
            <img src={pfp} alt="profile picture" />
          </div>
        </div>
        {/* Details */}
        <div className="absolute" style={{top: 0, bottom: 0, left: "250px", right: 0}}>
          <form>
            <input type="text" value="Name" className="text-center bg-transparent text-3xl mb-3"/>
            <br />
            <label className="bio-label">Pronouns:</label>
            <input type="text" value="pronoun" className="bio-input"/>
            <br />
            <label className="bio-label">Bio:</label>
            <input type="text" value="bio" className="bio-input"/>
            <br />
            <label className="bio-label">Region/Country:</label>
            <input type="text" value="region" className="bio-input"/>
            <br />
            <label className="bio-label">Interests:</label>
            <input type="text" value="Interests" className="bio-input"/>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
