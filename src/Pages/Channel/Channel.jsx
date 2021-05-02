import "./channel.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { ChannelProvider } from "../../Context/ChannelContext";
import { useStatus } from "../../Context/LoaderContext";
import { ChatBox } from "../../Components/ChatBox";
import { ChannelHeader } from "../../Components/ChannelHeader";
import { ChannelBody } from "../../Components/ChannelBody";
import { useSidebarContext } from "../../Context/SidebarContext";
import { db } from "../../firebase";

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
  const { state } = useSidebarContext();
  const { channelId } = useParams();
  const {
    user: { uid, photoURL, displayName },
  } = useAuthContext();
  // const [channelMessage, setChannelMessage] = useState();
  // const [channelDetails, setChannelDetails] = useState();
  // const [channelAudiance, setChannelAudiance] = useState();
  // const [channelMentors, setChannelMentors] = useState();
  // useEffect(() => {
  //   const Channel = getChannelById({ channelId });
  //   const Messages = getChannelMessages({ Channel });
  //   const Audiances = getChannelAudiances({ Channel });
  //   const Mentors = getChannelMentors({ Channel });
  //   Channel.onSnapshot((snapshot) => {
  //     console.log(snapshot);
  //     setChannelDetails(snapshot.data());
  //   });

  //   Messages.onSnapshot((snapshot) => {
  //     setChannelMessage(
  //       snapshot.docs.map((doc) => {
  //         console.log(doc);
  //         return { ...doc.data() };
  //       })
  //     );
  //   });
  //   Audiances.doc(uid).set({
  //     name: displayName,
  //     image: photoURL,
  //   });
  //   Mentors.onSnapshot((snapshot) => {
  //     setChannelMentors(
  //       snapshot.docs.map((doc) => {
  //         return { uid: doc.id, ...doc.data() };
  //       })
  //     );
  //   });
  //   Audiances.onSnapshot((snapshot) => {
  //     setChannelAudiance(
  //       snapshot.docs.map((doc) => {
  //         return { uid: doc.id, ...doc.data() };
  //       })
  //     );
  //   });
  //   return () => {
  //     Audiances.doc(uid).delete();
  //     Mentors.doc(uid).delete();
  //   };
  // }, [channelId]);

  // this neeed

  // const totalParticipants = channelAudiance?.length + channelMentors?.length;

  return (
    <>
      <ChannelProvider>
        <div className={state ? "mainToggled" : "main"}>
          <ChannelHeader />
          <ChannelBody />
        </div>
      </ChannelProvider>
      {/* <div className="postion-absolute right">
        <h1>{channelId}</h1>
        {ChannelMessage?.map((data) => (
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
      </div> */}
    </>
  );
};
