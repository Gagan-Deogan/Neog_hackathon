import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useStatus } from "../../Context/LoaderContext";
import banner from "../../assests/images/pagebanner.svg";
import logo from "../../assests/images/logo.svg";
import "./index.css";
import googleIcon from "../../assests/images/google.svg";

export const Home = () => {
  const { user, loginUser } = useAuthContext();
  const navigate = useNavigate();
  if (user) {
    navigate("/dashbord");
  }
  return (
    <>
      <div className="Login">
        <div className="bannerImageWrapper">
          <img className="bannerImage" src={banner} alt="Banner" />
        </div>
        <div className="loginContent">
          <img src={logo} alt="logo" className="pageLogo" />
          <h1 className="loginHeader">Sign in To Get Started!</h1>
          <p className="loginDescription">
            Millions of people use GupShup to turn ideas into reality
          </p>

          {!user && (
            <button onClick={loginUser}>
              <img alt="google-icon" className="googleIcon" src={googleIcon} />
              Sign in with google
            </button>
          )}
          <div className="footer">
            <p>Designed and developed by Team Hackers</p>
          </div>
        </div>
      </div>
    </>
  );
};
