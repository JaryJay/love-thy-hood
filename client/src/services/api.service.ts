import http from "../http-common";
import Neighbourhood from "../types/neighbourhood.type";
import Post from "../types/post.type";
import User from "../types/user.type";

class ApiDataService {
  async addPoints(neighbourhoodId: string, points: number): Promise<void> {
    const n = await this.getNeighbourhood(neighbourhoodId);
    const newNeighbourhood: Neighbourhood = { ...n.data, points: n.data.points + points };
    this.updateNeighbourhood(neighbourhoodId, newNeighbourhood);
  }
  getNeighbourhoods() {
    return http.get<Array<Neighbourhood>>("/neighbourhoods");
  }
  getNeighbourhood(id: string) {
    return http.get<Neighbourhood>(`/neighbourhoods/${id}`);
  }
  createNeighbourhood(data: Neighbourhood) {
    return http.post<Neighbourhood>(`/neighbourhoods`, data);
  }
  updateNeighbourhood(id: string, data: Neighbourhood) {
    return http.put(`/neighbourhoods/${id}`, data);
  }
  deleteNeighbourhood(id: string) {
    return http.delete(`/neighbourhoods/${id}`);
  }

  getUsers() {
    return http.get<Array<User>>("/users");
  }
  getUser(id: string) {
    return http.get<User>(`/users/${id}`);
  }
  createUser(data: User) {
    return http.post<User>(`/users`, data);
  }
  updateUser(id: string, data: User) {
    return http.put(`/users/${id}`, data);
  }
  deleteUser(id: string) {
    return http.delete(`/users/${id}`);
  }

  getPosts() {
    return http.get<Array<Post>>("/posts");
  }
  getPost(id: string) {
    return http.get<Post>(`/posts/${id}`);
  }
  createPost(data: Post) {
    return http.post<Post>(`/posts`, data);
  }
  updatePost(id: string, data: Post) {
    return http.put(`/posts/${id}`, data);
  }
  deletePost(id: string) {
    return http.delete(`/posts/${id}`);
  }
}

export default new ApiDataService();
