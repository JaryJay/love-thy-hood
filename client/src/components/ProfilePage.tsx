import React, { useContext, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import pfp from "./pfp.png";

const ProfilePage = () => {
  const user = useContext(UserContext);

  return (
    <div className="gradient-2 h-screen">
      <img
        src={pfp}
        alt="profile picture"
        style={{
          display: "flex",
          position: "absolute",
          top: "22%",
          left: "20%",
          width: 250,
          height: 250,
        }}
      />
      <form>
        <input
          type="text"
          value="name"
          style={{
            display: "flex",
            fontSize: 30,
            position: "absolute",
            textAlign: "left",
            top: "25%",
            left: "40%",
          }}
        />
        <label
          style={{
            display: "flex",
            color: "black",
            fontSize: 20,
            position: "absolute",
            textAlign: "left",
            top: "30%",
            left: "40%",
          }}
        >
          <br />
          Pronouns:
        </label>
        <input
          type="text"
          value="pronoun"
          style={{
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "33.8%",
            left: "47%",
            fontSize: 20,
            height: 30,
          }}
        />
        <label
          style={{
            display: "flex",
            color: "black",
            fontSize: 20,
            position: "absolute",
            textAlign: "left",
            top: "35%",
            left: "40%",
          }}
        >
          <br />
          Bio:
        </label>
        <input
          type="text"
          value="bio"
          style={{
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "38.9%",
            left: "43%",
            fontSize: 20,
            height: 30,
          }}
        />

        <label
          style={{
            display: "flex",
            color: "black",
            fontSize: 20,
            position: "absolute",
            textAlign: "left",
            top: "40%",
            left: "40%",
          }}
        >
          <br />
          Region/Country:
        </label>
        <input
          type="text"
          value="region"
          style={{
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "44%",
            left: "51%",
            fontSize: 20,
            height: 30,
          }}
        />

        <label
          style={{
            display: "flex",
            color: "black",
            fontSize: 20,
            position: "absolute",
            textAlign: "left",
            top: "45%",
            left: "40%",
          }}
        >
          <br />
          Interests:
        </label>
        <input
          type="text"
          value="Interests"
          style={{
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "49.1%",
            left: "48%",
            fontSize: 20,
            height: 30,
          }}
        />

        <label
          style={{
            display: "flex",
            color: "black",
            fontSize: 25,
            position: "absolute",
            fontWeight: "bold",
            textAlign: "left",
            top: "55%",
            left: "10%",
          }}
        >
          <br />
          Posts
        </label>
      </form>
    </div>
  );
};

export default ProfilePage;
