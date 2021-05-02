import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Avatar from "../../assests/images/profile.svg";
import "../Header/Header.css";
import "./ChannelHeader.css";
import { useSidebarContext } from "../../Context/SidebarContext";
import Home from "../../assests/images/home.svg";

export const ChannelHeader = () => {
  const { setState } = useSidebarContext();

  return (
    <header className="header flex j-space-between a-items-center">
      <div className="headerLeftWrap">
        <FaIcons.FaBars
          className="toggleButton"
          onClick={() => setState((toggle) => !toggle)}
        />
        <div className="channelInfo">
          <h1 className="channelName">
            Get started with coding by building a simple todo-app
          </h1>
          <h2 className="channelOwnerHeader">Gagandeep Singh</h2>
          <p className="participants">
            <FaIcons.FaUser /> 28 participants
          </p>
        </div>
      </div>
      <div className="headerRightWrapper">
        <Link to="/dashboard">
          <img src={Home} className="icon" alt="home"></img>
          <span className="navLink">Home</span>
        </Link>
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
  );
};
