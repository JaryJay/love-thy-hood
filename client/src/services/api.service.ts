import http from "../http-common";
import Comment from "../types/comment.type";
import Neighbourhood from "../types/neighbourhood.type";
import Post from "../types/post.type";
import User from "../types/user.type";

class ApiDataService {
  async addPoints(userId: string, points: number): Promise<void> {
    const user = await this.getUser(userId);
    const neighbourhoodId = user.neighbourhood;
    const n = await this.getNeighbourhood(neighbourhoodId);
    const newUser = { ...user, points: user.points + points };
    const newNeighbourhood: Neighbourhood = { ...n, points: n.points + points };
    await this.updateUser(userId, newUser);
    await this.updateNeighbourhood(neighbourhoodId, newNeighbourhood);
  }
  async makeComment(postId: string, comment: Comment) {
    const post = await this.getPost(postId);
    post.comments.push(comment);
    await this.updatePost(postId, post);
  }

  async getNeighbourhoods() {
    return (await http.get<Array<Neighbourhood>>("/neighbourhoods")).data;
  }
  async getNeighbourhood(id: string) {
    return (await http.get<Neighbourhood>(`/neighbourhoods/${id}`)).data;
  }
  async createNeighbourhood(data: Neighbourhood) {
    return (await http.post<Neighbourhood>(`/neighbourhoods`, data)).data;
  }
  async updateNeighbourhood(id: string, data: Neighbourhood) {
    return (await http.put<Neighbourhood>(`/neighbourhoods/${id}`, data)).data;
  }
  async deleteNeighbourhood(id: string) {
    return (await http.delete<Neighbourhood>(`/neighbourhoods/${id}`)).data;
  }

  async getUsers() {
    return (await http.get<Array<User>>("/users")).data;
  }
  async getUser(id: string) {
    return (await http.get<User>(`/users/${id}`)).data;
  }
  async createUser(user: User, neighbourhoodId: string) {
    user.neighbourhood = neighbourhoodId;
    const createdUser = (await http.post<User>(`/users`, user)).data;
    const n = await this.getNeighbourhood(neighbourhoodId);
    n.members.push(createdUser._id as string);
    await this.updateNeighbourhood(neighbourhoodId, n);
    return createdUser;
  }
  async updateUser(id: string, data: User) {
    return (await http.put<User>(`/users/${id}`, data)).data;
  }
  async deleteUser(id: string) {
    console.log("Why are you deleting a user");
    return (await http.delete<User>(`/users/${id}`)).data;
  }

  async getPosts() {
    return (await http.get<Array<Post>>("/posts")).data;
  }
  async getPost(id: string) {
    return (await http.get<Post>(`/posts/${id}`)).data;
  }
  async createPost(userId: string, data: Post) {
    data.user = userId;
    const post = (await http.post<Post>(`/posts`, data)).data;
    const user = await this.getUser(userId);
    await this.updateUser(userId, user);
    return post;
  }
  async updatePost(id: string, data: Post) {
    return (await http.put<Post>(`/posts/${id}`, data)).data;
  }
  async deletePost(id: string) {
    const deletedPost = (await http.delete<Post>(`/posts/${id}`)).data;
    const userId = deletedPost.user;
    const user = await this.getUser(userId);
    user.posts = user.posts.filter(p => p !== deletedPost._id);
    await this.updateUser(userId, user);
    return deletedPost;
  }
}

export default new ApiDataService();
