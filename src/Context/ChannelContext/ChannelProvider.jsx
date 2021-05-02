import { useState, useEffect, createContext, useContext } from "react";
import { useAuthContext } from "../AuthContext";
import { useParams } from "react-router-dom";
import { useMiddleWare } from "../../Utils/useMiddleWare";
const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {
  const { channelId } = useParams();
  const {
    user: { uid, photoURL, displayName },
  } = useAuthContext();
  const [channelDetails, setChannelDetails] = useState();
  const [channelMessage, setChannelMessage] = useState();
  const [channelAudiance, setChannelAudiance] = useState();
  const [channelMentors, setChannelMentors] = useState();
  const {
    getChannelById,
    getChannelMessages,
    getChannelAudiances,
    getChannelMentors,
  } = useMiddleWare();
  useEffect(() => {
    const Channel = getChannelById({ channelId });
    const Messages = getChannelMessages({ Channel });
    const Audiances = getChannelAudiances({ Channel });
    const Mentors = getChannelMentors({ Channel });
    Channel.onSnapshot((snapshot) => {
      setChannelDetails({ id: channelId, ...snapshot.data() });
    });

    Messages.onSnapshot((snapshot) => {
      setChannelMessage(
        snapshot.docs.map((doc) => {
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
  }, [channelId]);
  return (
    <ChannelContext.Provider
      value={{
        channelDetails,
        channelMessage,
        channelAudiance,
        channelMentors,
      }}>
      {children}
    </ChannelContext.Provider>
  );
};
export const useChannelContext = () => {
  return useContext(ChannelContext);
};
