import React, { createContext, useState } from "react";
import UserType from "../types/user.type";

const UserContext = createContext<
  [UserType, React.Dispatch<React.SetStateAction<UserType>>]
>([{} as UserType, () => {}]);

export {UserContext};
