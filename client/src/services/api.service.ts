import http from "../http-common";
import Neighbourhood from "../types/neighbourhood.type";
import Post from "../types/post.type";
import User from "../types/user.type";

class ApiDataService {
  async addPoints(neighbourhoodId: string, points: number): Promise<void> {
    const n = await this.getNeighbourhood(neighbourhoodId);
    const newNeighbourhood: Neighbourhood = { ...n, points: n.points + points };
    this.updateNeighbourhood(neighbourhoodId, newNeighbourhood);
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
    return (await http.put(`/neighbourhoods/${id}`, data)).data;
  }
  async deleteNeighbourhood(id: string) {
    return (await http.delete(`/neighbourhoods/${id}`)).data;
  }

  async getUsers() {
    return (await http.get<Array<User>>("/users")).data;
  }
  async getUser(id: string) {
    return (await http.get<User>(`/users/${id}`)).data;
  }
  async createUser(data: User) {
    return (await http.post<User>(`/users`, data)).data;
  }
  async updateUser(id: string, data: User) {
    return (await http.put(`/users/${id}`, data)).data;
  }
  async deleteUser(id: string) {
    return (await http.delete(`/users/${id}`)).data;
  }

  async getPosts() {
    return (await http.get<Array<Post>>("/posts")).data;
  }
  async getPost(id: string) {
    return (await http.get<Post>(`/posts/${id}`)).data;
  }
  async createPost(data: Post) {
    return (await http.post<Post>(`/posts`, data)).data;
  }
  async updatePost(id: string, data: Post) {
    return (await http.put(`/posts/${id}`, data)).data;
  }
  async deletePost(id: string) {
    return (await http.delete(`/posts/${id}`)).data;
  }
}

export default new ApiDataService();
