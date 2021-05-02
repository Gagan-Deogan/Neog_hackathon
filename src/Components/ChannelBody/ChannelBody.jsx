import "./ChannelBody.css";
import "../ChannelHeader/ChannelHeader.css";
import { useState } from "react";
import Emoji from "../../assests/images/emoji.svg";
import Send from "../../assests/images/send.svg";
import Profile from "../../assests/images/profile.svg";
import Picker from "emoji-picker-react";
import { useAuthContext } from "../../Context/AuthContext";
import { useChannelContext } from "../../Context/ChannelContext";
import { ChatBox } from "../ChatBox";
export const ChannelBody = () => {
  const { user } = useAuthContext();
  const { channelMessage } = useChannelContext();
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="mainWrapper">
      <div className="chatRow">
        <div className="chatRowLeft">
          <div className="chatBody">
            {channelMessage?.map((message) => (
              <div
                className={
                  user.uid == message.senderId ? "sender" : "recipient"
                }>
                <span className="message"> {message.message}</span>
                <span className="timestamp">{message.timestamp}</span>
              </div>
            ))}
          </div>
          <ChatBox />
        </div>
        <div className="chatRowRight">
          <h1 className="participantsHeader">Participants (93)</h1>
          <div className="participantsRow">
            <div className="singleParticipant">
              <img
                src={Profile}
                alt="participantName"
                className="participantImage"
              />
              <h1 className="participantName">Suyash Pradhan</h1>
            </div>

            <div className="singleParticipant">
              <img
                src={Profile}
                alt="participantName"
                className="participantImage"
              />
              <h1 className="participantName">Suyash Pradhan</h1>
            </div>

            <div className="singleParticipant">
              <img
                src={Profile}
                alt="participantName"
                className="participantImage"
              />
              <h1 className="participantName">Suyash Pradhan</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
