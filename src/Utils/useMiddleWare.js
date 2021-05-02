import { db } from "../firebase";
export const useMiddleWare = () => {
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
  return {
    getChannelById,
    getChannelMessages,
    getChannelAudiances,
    getChannelMentors,
  };
};
