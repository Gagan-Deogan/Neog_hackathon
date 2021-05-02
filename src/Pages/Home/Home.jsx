import { useAuthContext } from "../../Context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import { useStatus } from "../../Context/LoaderContext";
import banner from "../../assests/images/banner.svg";
import "./index.css";
import googleIcon from "../../assests/images/google-icon.svg";

export const Home = () => {
  const { user, loginUser, logoutUser } = useAuthContext();
  // const navigate = useNavigate();
  return (
    <>
      <div className="Login">
        <div className="bannerImageWrapper">
          <img className="bannerImage" src={banner} alt="Banner" />
          <div className="footer">
            <p>Designed and developed by Team Name</p>
          </div>
        </div>
        <div className="loginContent">
          <h1>Log In to GupShup</h1>
          <p>Millions of people use GupShup to turn ideas into reality</p>

          {!user && (
            <button onClick={loginUser}>
              <img alt="google-icon" className="googleIcon" src={googleIcon} />
              Sign in with google
            </button>
          )}
          {user && <button onClick={logoutUser}>Logout</button>}
          {user && <Link to="/dashboard">Dashboard</Link>}
        </div>
      </div>
    </>
  );
};
