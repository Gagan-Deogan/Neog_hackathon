import { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { db } from "../../firebase";
export const ChatBox = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const { user } = useAuthContext();
  const sendMessage = () => {
    if (input.length) {
      const sendingData = {
        message: input,
        timestamp: Date.now(),
        username: user.displayName,
        userImage: user.photoURL,
      };
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add(sendingData);
    }
  };
  return (
    <>
      <textarea
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`Message #${channelName}`}
      />
      <button type="submit" className="send_button" onClick={sendMessage}>
        Send
      </button>
    </>
  );
};
