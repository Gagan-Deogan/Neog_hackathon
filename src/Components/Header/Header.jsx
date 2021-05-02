import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "../../assests/images/search.svg";
import * as FaIcons from "react-icons/fa";
import Plus from "../../assests/images/plus.svg";
import Avatar from "../../assests/images/profile.svg";
import "./Header.css";
import { useSidebarContext } from "../../Context/SidebarContext";
import { Model } from "../Model";
import { CreateChannel } from "../CreateChannel";

export const Header = () => {
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
          <form action="#" className="formGroup">
            <img src={Search} alt="" className="formIcon" />
            <input type="text" placeholder="Search..." className="formField" />
          </form>
        </div>
        <div className="headerRightWrapper">
          <div className="buttonWrapper">
            {/* <NavLink to="/dashboard/create"> */}
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
              <img src={Avatar} alt="profile" className="profileImage" />
            </div>
            <div class="profileDropdownContent">
              <button className="link link-danger">Logout</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
