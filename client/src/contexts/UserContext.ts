import { createContext } from "react";
import UserType from "../types/user.type";

export const UserContext = createContext<UserType>({} as UserType);
