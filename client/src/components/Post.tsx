import logo from "./logo.png";

const Post = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <img src={logo} alt="logo"/>
    </div>

  );
};

export default Post;