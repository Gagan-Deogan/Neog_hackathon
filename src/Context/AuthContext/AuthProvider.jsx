import { useContext, createContext, useState, useEffect } from "react";
import { useStatus } from "../LoaderContext";
import { auth, provider } from "../../firebase";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { setStatus } = useStatus();
  const loginUser = async () => {
    setStatus("PENDING");
    try {
      const { user } = await auth.signInWithPopup(provider);
      setUser(user);
      setStatus("IDLE");
    } catch (err) {
      setStatus("IDLE");
    }
  };
  const logoutUser = () => {
    auth
      .signOut()
      .then(() => {
        setUser();
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
  };
  useEffect(() => {
    setStatus("PENDING");
    const unSubscribe = auth.onAuthStateChanged((user) => {
      console.log({ user });
      setUser(user);
      setStatus("IDLE");
    });
    return unSubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, logoutUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
