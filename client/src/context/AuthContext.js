import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer.js";
import RoleConstants from "../constants/RoleConstants.js";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || {
    auth: false,
    userRole: RoleConstants.NONE,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
