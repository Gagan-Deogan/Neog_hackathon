import "./chatbox.css";
import { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useChannelContext } from "../../Context/ChannelContext";
import { db } from "../../firebase";
import Send from "../../assests/images/send.svg";
import Picker from "emoji-picker-react";

export const ChatBox = () => {
  const [input, setInput] = useState("");
  const [displayEmoji, setDisplayEmoji] = useState(false);
  const { channelDetails } = useChannelContext();
  const [chosenEmoji, setChosenEmoji] = useState({ emoji: "😊" });
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const { user } = useAuthContext();
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.length) {
      const sendingData = {
        message: input,
        timestamp: Date.now(),
        username: user.displayName,
        userImage: user.photoURL,
        senderId: user.uid,
      };
      db.collection("channels")
        .doc(channelDetails.id)
        .collection("messages")
        .add(sendingData)
        .then(() => {
          setInput("");
        });
    }
  };
  return (
    <>
      <div
        className="emoji-picker"
        onClick={() => setInput(input + chosenEmoji.emoji)}
        style={{ display: displayEmoji ? "block" : "none" }}>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <div className="chatMessage">
        <form
          action="#"
          style={{ display: "flex" }}
          onSubmit={(e) => sendMessage(e)}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your message..."
            className="chatField"
          />

          <span
            className="emojiDisplay"
            onClick={() => setDisplayEmoji(!displayEmoji)}>
            😊
          </span>
        </form>
        <button
          onClick={(e) => sendMessage(e)}
          className="button button-ternary">
          <img src={Send} alt="send" className="sendButton"></img>
        </button>
      </div>
    </>
  );
};
