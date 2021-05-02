import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";
const SnakbarContext = createContext();

const intialSnakbar = { isShow: false, alertType: "", msg: "" };

export const SnakbarContextProvider = ({ children }) => {
  const [snakbarStatus, snakbarDispatch] = useReducer(reducer, intialSnakbar);

  return (
    <SnakbarContext.Provider
      value={{
        snakbarStatus,
        snakbarDispatch,
      }}>
      {children}
    </SnakbarContext.Provider>
  );
};
export const useSnakbarContext = () => {
  return useContext(SnakbarContext);
};
