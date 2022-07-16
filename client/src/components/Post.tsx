import { ChangeEvent, useState } from "react";
import PostType from "../types/post.type";
import ApiDataService from "../services/api.service";

const Post = () => {
  const [formState, setFormState] = useState<PostType>({
    files: [],
    caption: "",
    user: "",
    likes: [],
    comments: [],
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type == "file") {
      setFormState({ ...formState, [event.target.name]: event.target.files });
    } else {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const handleSubmission = () => {
    // Create post and assign to user
  };

  return (
    <div>
      <label>Files</label>
      <br />
      <input type="file" name="files" onChange={changeHandler} />
      <br />
      <label>Caption</label>
      <br />
      <input
        className="outline outline-1 rounded-md my-1 px-5 py-1"
        type="text"
        name="caption"
        onChange={changeHandler}
      />
      <div>
        <button onClick={handleSubmission}>Post</button>
      </div>
    </div>
  );
};

export default Post;
