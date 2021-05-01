import { useAuthContext } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";
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
          <br />
          <NavLink to="/dashboard">Dashboard</NavLink>
          <br />
          {!user && <button onClick={loginUser}>Login</button>}
          {user && <button onClick={logoutUser}>Logout</button>}
        </>
      )}
    </>
  );
};
