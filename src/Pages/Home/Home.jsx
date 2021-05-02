import { useAuthContext } from "../../Context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import { useStatus } from "../../Context/LoaderContext";

export const Home = () => {
  const { user, loginUser, logoutUser } = useAuthContext();
  const { status } = useStatus();
  return (
    <>
      {status !== "IDLE" && <h1>Loading...</h1>}
      {status === "IDLE" && (
        <>
          <h1>Login</h1>
          <NavLink to="/profile">profile</NavLink>
          {!user && <button onClick={loginUser}>Login</button>}
          {user && <button onClick={logoutUser}>Logout</button>}
          {user && <Link to="/dashboard">Dashboard</Link>}
        </>
      )}
    </>
  );
};
