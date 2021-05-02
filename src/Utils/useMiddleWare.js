import { db } from "../firebase";
export const useMiddleWare = () => {
  const getChannelById = ({ channelId }) => {
    return db.collection("channels").doc(channelId);
  };
  const getChannelMessages = ({ Channel }) => {
    return Channel.collection("messages").orderBy("timestamp", "asc");
  };
  const getChannelAudiances = ({ Channel }) => {
    return Channel.collection("audiances");
  };
  const getChannelMentors = ({ Channel }) => {
    return Channel.collection("mentors");
  };
  const handleAddToAudiances = ({ uid, image, name, channelId }) => {
    const Channel = getChannelById({ channelId });
    const Audiances = getChannelAudiances({ Channel });
    Audiances.doc(uid).set({
      name: name,
      image: image,
    });
  };
  const handleRemoveFromStage = ({ channelId, uid, name, image }) => {
    const Channel = getChannelById({ channelId });
    const Mentors = getChannelMentors({ Channel });
    Mentors.doc(uid).delete();
    handleAddToAudiances({ uid, name, image });
  };
  const handleRemoveFromAudiances = ({ uid, channelId }) => {
    const Channel = getChannelById({ channelId });
    const Audiances = getChannelAudiances({ Channel });
    Audiances.doc(uid).delete();
  };
  const handleMoveToStage = ({ uid, name, image, channelId }) => {
    const Channel = getChannelById({ channelId });
    const Mentors = getChannelMentors({ Channel });
    Mentors.doc(uid).set({
      name,
      image,
    });
    handleRemoveFromAudiances({ uid });
  };
  const handleHandeRise = ({ uid, channelId }) => {
    const Channel = getChannelById({ channelId });
    const Audiances = getChannelAudiances({ Channel });
    Audiances.doc(uid).update({
      handRaise: true,
    });
  };
  return {
    getChannelById,
    getChannelMessages,
    getChannelAudiances,
    getChannelMentors,
    handleRemoveFromStage,
    handleAddToAudiances,
    handleMoveToStage,
    handleHandeRise,
  };
};
