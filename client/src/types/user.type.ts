export default interface User {
    _id?: string,
    name: string,
    points: number,
    bio: string,
    neighbourhood: string, // Neighbourhood id
    posts: string[] // Post ids
};
