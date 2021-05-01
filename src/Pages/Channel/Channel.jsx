import { useState, useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { ChatBox } from "../../Components/ChatBox";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
const getChannelById = ({ channelId }) => {
  return db.collection("channels").doc(channelId);
};
export const Channel = () => {
  const { channelId } = useParams();
  const { user } = useAuthContext();
  const [roomMessage, setRoomMessage] = useState();
  const [channelDetails, setChannelDetails] = useState();
  console.log(user);
  useEffect(() => {
    const channel = getChannelById({ channelId });
    channel.onSnapshot((snapshot) => {
      setChannelDetails(snapshot.data());
    });
    channel
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        setRoomMessage(snapshot.docs.map((doc) => doc.data()));
      });
    channel.update({
      unstageUser: { [user.uid]: true },
    });
    return () => {
      channel.update({
        unstageUser: { [user.uid]: false },
      });
    };
  }, []);
  return (
    <>
      <h1>{channelId}</h1>
      {roomMessage?.map((data) => (
        <p key={data.id}>{data.message}</p>
      ))}
      {channelId && <ChatBox channelId={channelId} />}
    </>
  );
};
