import "./ChannelBody.css";
import "../ChannelHeader/ChannelHeader.css";
import { useState, useRef, useEffect } from "react";
import Emoji from "../../assests/images/emoji.svg";
import Send from "../../assests/images/send.svg";
import Profile from "../../assests/images/profile.svg";
import Picker from "emoji-picker-react";
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
                  <div
                    className="message"
                    dangerouslySetInnerHTML={{
                      __html: marked(message.message),
                    }}></div>
                  <span className="timestamp">
                    {`${new Date(message.timestamp).toLocaleDateString(
                      "en-US"
                    )} ${new Date(message.timestamp).toLocaleTimeString(
                      "en-US"
                    )}`}{" "}
                  </span>
                </div>
              </>
            ))}
            <div ref={chatRef}></div>
          </div>
          <ChatBox />
        </div>
        <div className="chatRowRight">
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
