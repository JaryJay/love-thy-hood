import Comment from "./comment.type";

export default interface Post {
    files: string[],
    caption: string,
    user: string,
    likes: string[], // User ids
    comments: Comment[] // Comment objects
};
