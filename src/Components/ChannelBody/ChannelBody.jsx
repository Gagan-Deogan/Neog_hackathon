import "./ChannelBody.css";
import "../ChannelHeader/ChannelHeader.css";
import { useState, useRef, useEffect } from "react";
import Emoji from "../../assests/images/emoji.svg";
import Send from "../../assests/images/send.svg";
import Profile from "../../assests/images/profile.svg";
import Picker from "emoji-picker-react";
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
const MentorsParticipent = ({ participant, showRemove }) => {
  return (
    <div className="row p1">
      <img
        src={participant.image}
        alt="participantName"
        className="participantImage border-round"
      />
      <h1 className="participantName pL1">{participant.name}</h1>
      {showRemove && <button>Remove</button>}
    </div>
  );
};

export const ChannelBody = () => {
  const { user } = useAuthContext();
  const {
    channelDetails,
    channelMessage,
    channelAudiance,
    ChannelMentor,
  } = useChannelContext();
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
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
              <>
                <div
                  className={
                    user.uid == message.senderId ? "sender" : "recipient"
                  }>
                  <span className="message"> {message.message}</span>
                  <span className="timestamp">
                    {`${new Date(message.timestamp).toLocaleDateString(
                      "en-US"
                    )} ${new Date(message.timestamp).toLocaleTimeString(
                      "en-US"
                    )}`}{" "}
                  </span>
                  <h2
                    className={
                      user.uid === message.senderId
                        ? "senderName"
                        : "recipientName"
                    }>
                    {message.username}
                  </h2>
                  <img
                    src={message.userImage}
                    alt="chatSenderAvatar"
                    className={
                      user.uid === message.senderId
                        ? "chatSenderAvatar"
                        : "chatRecipientAvatar"
                    }
                  />
                </div>
              </>
            ))}
            <div ref={chatRef}></div>
          </div>
          <ChatBox />
        </div>
        <div className="chatRowRight">
          <h1 className="participantsHeader">
            Mentor ({channelAudiance?.length})
          </h1>
          <div className="column align-start">
            {channelAudiance?.map((participant) => (
              <MentorsParticipent
                participant={participant}
                showRemove={user.uid === channelDetails.owner}
              />
            ))}
          </div>
          <h1 className="participantsHeader">
            Audiances ({channelAudiance?.length})
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
