import "./ChannelBody.css";
import "../ChannelHeader/ChannelHeader.css";
import { useState, useRef, useEffect } from "react";
import marked from "marked";
import { useAuthContext } from "../../Context/AuthContext";
import { useChannelContext } from "../../Context/ChannelContext";
import { ChatBox } from "../ChatBox";

const SingleParticipent = ({ participant }) => {
  return (
    <div className="singleParticipant">
      <img
        src={participant.image}
        alt="participantName"
        className="participantImage border-round"
      />
      <h1 className="participantName">{participant.name}</h1>
    </div>
  );
};
const Messages = ({ message, user }) => {
  return (
    <>
      <div className={user.uid == message.senderId ? "sender" : "recipient"}>
        <h2
          className={
            user.uid == message.senderId ? "senderName" : "recipientName"
          }>
          {message.username}
        </h2>
        <img
          src={message.userImage}
          alt="chatSenderAvatar"
          className={
            user.uid == message.senderId
              ? "chatSenderAvatar"
              : "chatRecipientAvatar"
          }
        />
        <div
          className="message"
          dangerouslySetInnerHTML={{
            __html: marked(message.message),
          }}></div>
        <span className="timestamp">
          {`${new Date(message.timestamp).toLocaleDateString(
            "en-US"
          )} ${new Date(message.timestamp).toLocaleTimeString("en-US")}`}{" "}
        </span>
      </div>
    </>
  );
};

export const ChannelBody = () => {
  const { user } = useAuthContext();
  const { channelMessage, channelAudiance } = useChannelContext();
  const chatRef = useRef(null);
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [channelMessage]);
  return (
    <div className="mainWrapper">
      <div className="chatRow">
        <div className="chatRowLeft">
          <div className="chatBody">
            {channelMessage?.map((message) => (
              <Messages message={message} user={user} />
            ))}
            <div ref={chatRef}></div>
          </div>
          <ChatBox />
        </div>
        <div className="chatRowRight">
          <h1 className="participantsHeader">
            Participent ({channelAudiance?.length})
          </h1>
          <div className="participantsRow">
            {channelAudiance?.map((participant) => (
              <SingleParticipent participant={participant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
