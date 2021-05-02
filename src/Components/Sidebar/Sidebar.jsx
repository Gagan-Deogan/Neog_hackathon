import React from "react";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Temp from "../../assests/images/temp.svg";
import { useSidebarContext } from "../../Context/SidebarContext";
import { useChannelsProvider } from "../../Context/ChannelsContext";
import Logo from "../../assests/images/logo.svg";
import "./Sidebar.css";

const ChannelLink = ({ channel }) => {
  return (
    <NavLink to={"channel/" + channel.id}>
      <div className="channels flex j-space-between">
        <div className="channelsLeftWrap">
          <img src={channel.imageUrl} alt="" className="channelImage" />
        </div>
        <div className="channelsRightWrap">
          <h1 className="channelTitle">{channel.name}</h1>
          <p className="channelOwner">{channel.createdBy}</p>
          <div className="channelInfo flex a-items-center">
            <p className="status">Live Now</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export const Sidebar = () => {
  const { state } = useSidebarContext();
  const { channels } = useChannelsProvider();
  return (
    <aside className={state ? "sidebarToggled" : "sidebar"}>
      <div className="sidebarHeader  flex j-space-between a-items-center">
        <img src={Logo} alt="logo" className="logo"></img>
      </div>
      <nav>
        <div className="sidebarSection">
          <h2 className="sidebarSectionTitle">Channels</h2>

          {channels &&
            channels.map((channel) => <ChannelLink channel={channel} />)}
        </div>
      </nav>
    </aside>
  );
};
