import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../../assests/images/search.svg";
import * as FaIcons from "react-icons/fa";
import Plus from "../../assests/images/plus.svg";
import Avatar from "../../assests/images/profile.svg";
import "./Header.css";
import { useSidebarContext } from "../../Context/SidebarContext";
import { Model } from "../Model";
import { CreateChannel } from "../CreateChannel";
import { useAuthContext } from "../../Context/AuthContext";

export const Header = () => {
  const { user, logoutUser } = useAuthContext();
  const { setState } = useSidebarContext();
  const [model, setModel] = useState();
  return (
    <>
      <Model isOpenModel={model} setIsOpenModel={setModel}>
        <CreateChannel setModel={setModel} />
      </Model>
      <header className="header flex j-space-between a-items-center">
        <div className="headerLeftWrap">
          <FaIcons.FaBars
            className="toggleButton"
            onClick={() => setState((toggle) => !toggle)}
          />
        </div>
        <div className="headerRightWrapper">
          <div className="buttonWrapper">
            <img src={Plus} alt="" className="buttonIcon" />
            <button
              className="button button-primary"
              onClick={() => setModel(!model)}>
              <span className="buttonText">Create a channel</span>
            </button>
            {/* </NavLink> */}
          </div>
          <div className="profileDropdown">
            <div className="profile">
              <img
                src={user.photoURL}
                alt="profile"
                className="profileImage border-round"
              />
            </div>
            <div class="profileDropdownContent">
              <button
                className="link link-danger border-radius-4"
                onClick={logoutUser}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
