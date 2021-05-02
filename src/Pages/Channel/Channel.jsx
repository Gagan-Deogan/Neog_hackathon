import "./channel.css";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useStatus } from "../../Context/LoaderContext";
import { ChatBox } from "../../Components/ChatBox";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
const getChannelById = ({ channelId }) => {
  return db.collection("channels").doc(channelId);
};
const getChannelMessages = ({ Channel }) => {
  console.log(Channel);
  return Channel.collection("messages").orderBy("timestamp", "asc");
};
const getChannelAudiances = ({ Channel }) => {
  return Channel.collection("audiances");
};
const getChannelMentors = ({ Channel }) => {
  return Channel.collection("mentors");
};

const AudinceList = ({
  user,
  owner,
  currentUser,
  handleMoveToStage,
  handleRemoveFromStage,
  listFor,
}) => {
  return (
    <>
      <h3>{user.name}</h3>
      <img src={user.image} alt="" />
      {user.handRaise && <span>👋🏻</span>}
      {user.handRaise && owner === currentUser && listFor === "AUDIANCES" && (
        <button
          onClick={() =>
            handleMoveToStage({
              uid: user.uid,
              name: user.name,
              image: user.image,
            })
          }>
          Move to Stage
        </button>
      )}
      {owner === currentUser && listFor === "MENTORS" && (
        <button
          onClick={() =>
            handleRemoveFromStage({
              uid: user.uid,
              name: user.name,
              image: user.image,
            })
          }>
          Remove From Stage
        </button>
      )}
    </>
  );
};
export const Channel = () => {
  const { channelId } = useParams();
  const {
    user: { uid, photoURL, displayName },
  } = useAuthContext();
  const [roomMessage, setRoomMessage] = useState();
  const [channelDetails, setChannelDetails] = useState();
  const [channelAudiance, setChannelAudiance] = useState();
  const [channelMentors, setChannelMentors] = useState();
  useEffect(() => {
    const Channel = getChannelById({ channelId });
    const Messages = getChannelMessages({ Channel });
    const Audiances = getChannelAudiances({ Channel });
    const Mentors = getChannelMentors({ Channel });
    Channel.onSnapshot((snapshot) => {
      console.log(snapshot);
      setChannelDetails(snapshot.data());
    });

    Messages.onSnapshot((snapshot) => {
      setRoomMessage(
        snapshot.docs.map((doc) => {
          console.log(doc);
          return { ...doc.data() };
        })
      );
    });
    Audiances.doc(uid).set({
      name: displayName,
      image: photoURL,
    });
    Mentors.onSnapshot((snapshot) => {
      setChannelMentors(
        snapshot.docs.map((doc) => {
          return { uid: doc.id, ...doc.data() };
        })
      );
    });
    Audiances.onSnapshot((snapshot) => {
      setChannelAudiance(
        snapshot.docs.map((doc) => {
          return { uid: doc.id, ...doc.data() };
        })
      );
    });
    return () => {
      Audiances.doc(uid).delete();
      Mentors.doc(uid).delete();
    };
  }, []);
  const handleHandeRise = () => {
    const Channel = getChannelById({ channelId });
    const Audiances = getChannelAudiances({ Channel });
    Audiances.doc(uid).update({
      handRaise: true,
    });
  };
  const handleRemoveFromAudiances = ({ uid }) => {
    const Channel = getChannelById({ channelId });
    const Audiances = getChannelAudiances({ Channel });
    Audiances.doc(uid).delete();
  };
  const handleMoveToStage = ({ uid, name, image }) => {
    const Channel = getChannelById({ channelId });
    const Mentors = getChannelMentors({ Channel });
    Mentors.doc(uid).set({
      name,
      image,
    });
    handleRemoveFromAudiances({ uid });
  };
  const handleAddToAudiances = ({ uid, image, name }) => {
    const Channel = getChannelById({ channelId });
    const Audiances = getChannelAudiances({ Channel });
    Audiances.doc(uid).set({
      name: name,
      image: image,
    });
  };
  const handleRemoveFromStage = ({ uid, name, image }) => {
    console.log({ uid, name, image });
    const Channel = getChannelById({ channelId });
    const Mentors = getChannelMentors({ Channel });
    Mentors.doc(uid).delete();
    handleAddToAudiances({ uid, name, image });
  };
  return (
    <>
      <div className="postion-absolute right">
        <h1>{channelId}</h1>
        {roomMessage?.map((data) => (
          <p key={data.id}>{data.message}</p>
        ))}
        {channelId && <ChatBox channelId={channelId} />}
        <br />
        {channelDetails?.owner === uid && (
          <button
            onClick={() =>
              handleMoveToStage({ uid, name: displayName, image: photoURL })
            }>
            Move to stage Hand
          </button>
        )}
        {channelDetails?.owner !== uid && (
          <button onClick={handleHandeRise}>Riase Hand</button>
        )}
        <h2>Mentors</h2>
        {channelMentors &&
          channelMentors.map((user) => (
            <AudinceList
              user={user}
              currentUser={uid}
              owner={channelDetails?.owner}
              handleRemoveFromStage={handleRemoveFromStage}
              listFor="MENTORS"
            />
          ))}
        <h2>Audiances</h2>
        {channelAudiance &&
          channelAudiance.map((user) => (
            <AudinceList
              user={user}
              currentUser={uid}
              owner={channelDetails?.owner}
              handleMoveToStage={handleMoveToStage}
              listFor="AUDIANCES"
            />
          ))}
      </div>
    </>
  );
};
