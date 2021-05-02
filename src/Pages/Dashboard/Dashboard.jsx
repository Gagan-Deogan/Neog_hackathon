import React from "react";
import { Main } from "../../Components/Main/Main";
import { Sidebar } from "../../Components/Sidebar";
import { ProtectedRoute } from "../../Components/ProtectedRoute";
import "./Dashboard.css";
import { Routes, Route } from "react-router-dom";
import { Channels } from "../../Components/Channels";
import { Channel } from "../Channel";
import { ChannelsProvider } from "../../Context/ChannelsContext";
export const Dashboard = () => {
  return (
    <>
      <ChannelsProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/create" element={<Channels />}></Route>
          <ProtectedRoute
            path="/channel/:channelId"
            element={<Channel />}></ProtectedRoute>
        </Routes>
      </ChannelsProvider>
    </>
  );
};
