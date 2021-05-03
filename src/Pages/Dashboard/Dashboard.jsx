import "./Dashboard.css";
import { Main } from "../../Components/Main/Main";
import { Sidebar } from "../../Components/Sidebar";
import { ProtectedRoute } from "../../Components/ProtectedRoute";
import { Routes } from "react-router-dom";
import { Channel } from "../Channel";
import { ChannelsProvider } from "../../Context/ChannelsContext";
export const Dashboard = () => {
  return (
    <>
      <ChannelsProvider>
        <Sidebar />
        <Routes>
          <ProtectedRoute path="/" element={<Main />} />
          <ProtectedRoute
            path="/channel/:channelId"
            element={<Channel />}></ProtectedRoute>
        </Routes>
      </ChannelsProvider>
    </>
  );
};
