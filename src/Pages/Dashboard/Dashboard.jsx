import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

export const Dashboard = () => {
  const [channels, setChannels] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChannels(data);
    });
  }, []);
  return (
    <>
      <h1>DashBoard</h1>
      {channels?.map((channel) => (
        <div
          key={channel.id}
          onClick={() => navigate(`/channel/${channel.id}`)}>
          <h3>{channel.name}</h3>
          <p>{channel.description}</p>
        </div>
      ))}
    </>
  );
};
