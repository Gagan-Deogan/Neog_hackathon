import { useContext, CreateContext } from "react";

const AuthContext = CreateContext();

export const AuthProvider = ({ children }) => {
  const name = "Gagan";
  const email = "email";
  return (
    <AuthContext.Provider value={{ name, email }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
