export default interface User {
  _id?: string;
  name: string;
  email: string;
  points: number;
  bio: string;
  neighbourhood: string; // Neighbourhood id
  posts: string[]; // Post ids
}
