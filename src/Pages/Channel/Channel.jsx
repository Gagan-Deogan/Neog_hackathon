import "./channel.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { ChannelProvider } from "../../Context/ChannelContext";
import { useStatus } from "../../Context/LoaderContext";
import { ChatBox } from "../../Components/ChatBox";
import { ChannelHeader } from "../../Components/ChannelHeader";
import { ChannelBody } from "../../Components/ChannelBody";
import { useSidebarContext } from "../../Context/SidebarContext";
import { db } from "../../firebase";

const AudinceList = ({
  user,
  owner,
  currentUser,
  handleMoveToStage,
  handleRemoveFromStage,
  listFor,
}) => {
  return (
    <>
      <h3>{user.name}</h3>
      <img src={user.image} alt="" />
      {user.handRaise && <span>👋🏻</span>}
      {user.handRaise && owner === currentUser && listFor === "AUDIANCES" && (
        <button
          onClick={() =>
            handleMoveToStage({
              uid: user.uid,
              name: user.name,
              image: user.image,
            })
          }>
          Move to Stage
        </button>
      )}
      {owner === currentUser && listFor === "MENTORS" && (
        <button
          onClick={() =>
            handleRemoveFromStage({
              uid: user.uid,
              name: user.name,
              image: user.image,
            })
          }>
          Remove From Stage
        </button>
      )}
    </>
  );
};
export const Channel = () => {
  const { state } = useSidebarContext();
  const { channelId } = useParams();
  const {
    user: { uid, photoURL, displayName },
  } = useAuthContext();

  return (
    <>
      <ChannelProvider>
        <div className={state ? "mainToggled" : "main"}>
          <ChannelHeader />
          <ChannelBody />
        </div>
      </ChannelProvider>
    </>
  );
};
