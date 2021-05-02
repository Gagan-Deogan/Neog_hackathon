import { useState } from "react";
import { createContext, useContext } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  return (
    <SidebarContext.Provider value={{ state, setState }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
