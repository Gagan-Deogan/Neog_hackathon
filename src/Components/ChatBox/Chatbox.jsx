import { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useChannelContext } from "../../Context/ChannelContext";
import { db } from "../../firebase";
import Send from "../../assests/images/send.svg";

export const ChatBox = () => {
  const [input, setInput] = useState("");
  const { channelDetails } = useChannelContext();
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
      <div className="chatMessage">
        {/* <Picker onEmojiClick={onEmojiClick} /> */}
        {/* <img
          onClick={onEmojiClick}
          src={Emoji}
          className="emojiIcon icon"
          alt=" icon"></img> */}
        <form action="#" onSubmit={(e) => sendMessage(e)}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your message..."
            className="chatField"
          />
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
