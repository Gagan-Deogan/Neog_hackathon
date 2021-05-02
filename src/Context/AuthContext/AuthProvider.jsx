import { useContext, createContext, useState, useEffect } from "react";
import { useStatus } from "../LoaderContext";
import { auth, provider } from "../../firebase";
import { useLocation, useNavigate } from "react-router";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { setStatus } = useStatus();
  const loginUser = async () => {
    setStatus("PENDING");
    try {
      const { user } = await auth.signInWithPopup(provider);
      setUser(user);
      setStatus("IDLE");
      navigate("/dashboard");
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
      setUser(user);
      setStatus("IDLE");
      console.log({ pathname: location.pathname });
      if (location.pathname.length > 1) {
        navigate(location.pathname);
      } else {
        navigate("/dashboard");
      }
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
