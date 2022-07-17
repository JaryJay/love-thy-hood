import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import pfp from "./pfp.png";

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user = useContext(UserContext);

  return (
    <div className="gradient-2 h-screen">
      {/* Profile details (pfp + details) */}
      <div
        className="absolute mr-auto ml-auto right-0 left-0 top-32"
        style={{
          width: 600,
          height: 250,
        }}
      />
      <form>
        <input
          type="text"
          value="name"
          style={{
            fontWeight: "bold",
            backgroundColor: "rgba(0,0,0,0)",
            display: "flex",
            fontSize: 30,
            position: "absolute",
            top: "25%",
            left: "20%",
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
            left: "20%",
          }}
        >
          <br />
          Pronouns:
        </label>
        <input
          type="text"
          value="pronoun"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            display: "flex",
            position: "absolute",
            top: "33.6%",
            left: "27%",
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
            left: "20%",
          }}
        >
          <br />
          Bio:
        </label>
        <input
          type="text"
          value="bio"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "38.65%",
            left: "23%",
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
            left: "20%",
          }}
        >
          <br />
          Region/Country:
        </label>
        <input
          type="text"
          value="region"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "43.65%",
            left: "31%",
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
            left: "20%",
          }}
        >
          <br />
          Interests:
        </label>
        <input
          type="text"
          value="Interests"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            display: "flex",
            position: "absolute",
            textAlign: "left",
            top: "48.65%",
            left: "27%",
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
