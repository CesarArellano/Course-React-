import { createContext } from "react";

export interface AuthState {
  user: {
    name: string;
    logged: boolean;
  }
  dispatch: React.Dispatch<any>
}

export const AuthContext = createContext({} as AuthState );