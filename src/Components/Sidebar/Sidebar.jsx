import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import Temp from "../../assests/images/temp.svg";
import { useSidebarContext } from "../../Context/SidebarContext";
import Logo from "../../assests/images/logo.svg";
import "./Sidebar.css";

export const Sidebar = () => {
  const { state } = useSidebarContext();

  return (
    <aside className={state ? "sidebarToggled" : "sidebar"}>
      <div className="sidebarHeader  flex j-space-between a-items-center">
        <img src={Logo} alt="logo" className="logo"></img>
      </div>
      <nav>
        <div className="sidebarSection">
          <h2 className="sidebarSectionTitle">Channels</h2>

          <Link to="channel1">
            <div className="channels flex j-space-between">
              <div className="channelsLeftWrap">
                <img src={Temp} alt="" className="channelImage" />
              </div>
              <div className="channelsRightWrap">
                <h1 className="channelTitle">How to talk to anyone?</h1>
                <p className="channelOwner">Suyash Pradhan</p>
                <div className="channelInfo flex a-items-center">
                  <p className="status">Live Now </p>
                  <p className="participants">
                    <FaIcons.FaUser /> 28
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </aside>
  );
};
