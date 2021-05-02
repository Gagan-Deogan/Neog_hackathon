import "./Dashboard.css";
import { useState } from "react";
import { Main } from "../../Components/Main/Main";
import { Sidebar } from "../../Components/Sidebar";
import { Model } from "../../Components/Model";
import { ProtectedRoute } from "../../Components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { Channel } from "../Channel";
import { ChannelsProvider } from "../../Context/ChannelsContext";
export const Dashboard = () => {
  return (
    <>
      <ChannelsProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          {/* <Route path="/create" element={}></Route> */}
          <ProtectedRoute
            path="/channel/:channelId"
            element={<Channel />}></ProtectedRoute>
        </Routes>
      </ChannelsProvider>
    </>
  );
};
