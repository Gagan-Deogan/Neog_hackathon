import React, { useState } from "react";
import Emoji from "../../assests/images/emoji.svg";
import Send from "../../assests/images/send.svg";
import Profile from "../../assests/images/profile.svg";
import Picker from "emoji-picker-react";
import "./ChannelBody.css";

export const ChannelBody = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="mainWrapper">
      <div className="chatRow">
        <div className="chatRowLeft">
          <div className="chatBody">
            <div className="sender">
              <span className="message">
                {" "}
                Hello I'm Suyash Pradhan, Can you teach me ReactJS?
              </span>
              <span className="timestamp">05:40PM</span>
            </div>
            <div className="sender">
              <span className="message">
                {" "}
                Hello I'm Suyash Pradhan, Can you teach me ReactJS?
              </span>
              <span className="timestamp">05:40PM</span>
            </div>
            <div className="sender">
              <span className="message">
                {" "}
                Hello I'm Suyash Pradhan, Can you teach me ReactJS?
              </span>
              <span className="timestamp">05:40PM</span>
            </div>
            <div className="recipient">
              <span className="message">
                {" "}
                Yes why not, start learning ReactJS from my course
              </span>
              <span className="timestamp">05:40PM</span>
            </div>
            <div className="recipient">
              <span className="message">
                {" "}
                Yes why not, start learning ReactJS from my course
              </span>
              <span className="timestamp">05:40PM</span>
            </div>
          </div>
          <div className="chatMessage">
            {/*             <Picker onEmojiClick={onEmojiClick} />
             */}{" "}
            <img
              onClick={onEmojiClick}
              src={Emoji}
              className="emojiIcon icon"
              alt=" icon"
            ></img>
            <form action="#">
              <input
                type="text"
                placeholder="Write your message..."
                className="chatField"
              />
            </form>
            <button className="button button-ternary">
              <img src={Send} alt="send" className="sendButton"></img>
            </button>
          </div>
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
