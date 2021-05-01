import banner from "../../assests/images/banner.svg";
import "./login.css";
import googleIcon from "../../assests/images/google-icon.svg";

import Footer from '../../Footer'
import { useAuthContext } from "../../Context/AuthContext";

export const Login = () => {
    const { user, loginUser, logoutUser } = useAuthContext()
  return (
      <>
    <div className="Login">
      <div className="bannerImageWrapper">
        <img className="bannerImage" src={banner} alt="Banner image"/>
      </div>
      <hr />
      <div className="loginContent">
        <h1>Log In to GupShup</h1>
        <p>Millions of people use GupShup to turn ideas into reality</p>
        

        {!user && <button onClick={loginUser} >
          <img alt="google-icon" class="googleIcon" src={googleIcon} />
          Sign in with google
        </button>}
          {user && <button onClick={logoutUser}>Logout</button>}
      </div>
      {/* <h1>Login</h1>
      <NavLink to="/">home</NavLink> */}
    </div>
    <Footer />
    </>
  );
};
