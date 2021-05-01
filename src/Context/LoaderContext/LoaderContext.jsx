import { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [status, setStatus] = useState("IDLE");
  return (
    <LoaderContext.Provider value={{ status: status, setStatus: setStatus }}>
      {children}
    </LoaderContext.Provider>
  );
};
export const useStatus = () => {
  return useContext(LoaderContext);
};
