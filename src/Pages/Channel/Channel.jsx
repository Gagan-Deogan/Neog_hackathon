import { useState, useEffect } from "react";
import { ChatBox } from "../../Components/ChatBox";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
export const Channel = () => {
  const [roomMessage, setRoomMessage] = useState();
  const { channelId } = useParams();
  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setRoomMessage(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, []);
  return (
    <>
      <h1>{channelId}</h1>
      {roomMessage?.map((data) => (
        <p>{data.message}</p>
      ))}
      {channelId && <ChatBox channelId={channelId} />}
    </>
  );
};
