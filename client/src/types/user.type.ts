export default interface User {
    name: string,
    points: number,
    bio: string,
    neighbourhood: string, // Neighbourhood id
    posts: string[] // Post ids
};
