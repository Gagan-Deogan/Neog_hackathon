import { createContext, useEffect, useState, useContext } from "react";
import { Channels } from "../../Components/Channels";
import { db } from "../../firebase";
const ChannelContext = createContext();

export const ChannelsProvider = ({ children }) => {
  const [channels, setChannels] = useState();
  useEffect(() => {
    const unSubscribe = db.collection("channels").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChannels(data);
    });
    return unSubscribe;
  }, []);
  return (
    <ChannelContext.Provider value={{ channels }}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannelsProvider = () => {
  return useContext(ChannelContext);
};
