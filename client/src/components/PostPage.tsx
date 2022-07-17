import { ChangeEvent, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiDataService from "../services/api.service";
import Post from "../types/post.type";
import { UserContext } from "../contexts/UserContext";

const PostPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  const [files, setFiles] = useState<File[]>([]);

  const [formState, setFormState] = useState<Post>({
    files: [],
    caption: "",
    user: user._id!, // REPLACE WITH ACTUAL USER ID
    likes: [],
    comments: [],
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type !== "file") {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    } else {
      setFiles(Array.from(event.target.files!));
    }
  };

  const canSubmit = () => formState.caption && formState.user;

  const handleSubmission = async () => {
    if (canSubmit()) {
      const urls = [];
      for (const file of files) {
        let url = await ApiDataService.createUrlForAddingImage();
        await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": "multipart/form-data" },
          body: file,
        });
        url = url.split("?")[0];
        urls.push(url);
      }
      const newFormState = { ...formState, files: urls };
      setFormState(newFormState);
      // Only post if caption and user are valid
      const post: Post = await ApiDataService.createPost(
        formState.user,
        newFormState
      );
      ApiDataService.addPoints(formState.user, 10);
      navigate("/");
    } else {
      console.log("nope", formState);
    }
  };

  return (
    <div className="h-screen gradient-1 text-white font-sans font-semibold">
      <div className="flex justify-between md:p-20 sm:p-10 w-full">
        <div className="flex-1 w-1/2 mr-20 my-8">
          <span className="text-8xl">Post it.</span>
          <div className="mt-8 mb-4 h-2 bg-white rounded-full w-96" />
          <span className="text-2xl">
            Upload something for everyone to see!
          </span>
        </div>
        <div className="flex-1 w-1/2 m-4">
          <div className="glass-morphism-1 p-8">
            <label htmlFor="file" className="w-full h-full bg-slate-300">
              <input
                type="file"
                id="file"
                multiple
                onChange={changeHandler}
                className="hidden"
              />
              <div className="w-full h-full rounded-md border-dashed border-2 border-slate-100 p-2 m-1 text-center cu">
                Choose files
              </div>
            </label>
            <br />
            <input
              className="rounded-md my-1 px-5 py-1 w-full bg-gray-600 bg-opacity-20 border-none outline-none"
              type="text"
              name="caption"
              placeholder="Caption"
              onChange={changeHandler}
            />
            <br />
            <div className="mt-4">
              {canSubmit() ? (
                <button
                  onClick={handleSubmission}
                  className="rounded-md border-orange-400 border-2 py-2 px-8
                  text-orange-400 hover:text-white hover:bg-orange-400 transition-all"
                >
                  Post
                </button>
              ) : (
                <button
                  className="rounded-md border-gray-400 border-2 py-2 px-8
                  text-slate-400 transition-all cursor-not-allowed"
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
