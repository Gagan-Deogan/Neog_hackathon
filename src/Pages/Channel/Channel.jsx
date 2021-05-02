import React from "react";
import "./Channel.css";
import { ChannelHeader } from "../../Components/ChannelHeader";
import { ChannelBody } from "../../Components/ChannelBody";
import { useSidebarContext } from "../../Context/SidebarContext";

export const Channel = () => {
  const { state } = useSidebarContext();
  return (
    <div className={state ? "mainToggled" : "main"}>
      <ChannelHeader />
      <ChannelBody />
    </div>
  );
};
