import React, { useContext, useEffect } from "react";
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
            fontWeight: "bold",
            backgroundColor: 'rgba(0,0,0,0)',
            display: "flex",
            fontSize: 30,
            position: "absolute",
            top: "25%",
            left: "42%",
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
            left: "42%",
          }}
        >
          <br />
          Pronouns:
        </label>
        <input
          type="text"
          value="pronoun"
          style={{
            backgroundColor: 'rgba(0,0,0,0)',
            display: "flex",
            position: "absolute",
            top: "33.6%",
            left: "49%",
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
            left: "42%",
          }}
        >
          <br />
          Bio:
        </label>
        <input
          type="text"
          value="bio"
          style={{
            backgroundColor: 'rgba(0,0,0,0)',
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "38.65%",
            left: "45%",
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
            left: "42%",
          }}
        >
          <br />
          Region/Country:
        </label>
        <input
          type="text"
          value="region"
          style={{
            backgroundColor: 'rgba(0,0,0,0)',
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "43.65%",
            left: "52.5%",
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
            left: "42%",
          }}
        >
          <br />
          Interests:
        </label>
        <input
          type="text"
          value="Interests"
          style={{
            backgroundColor: 'rgba(0,0,0,0)',
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "48.65%",
            left: "48.25%",
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
            left: "20%",
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
