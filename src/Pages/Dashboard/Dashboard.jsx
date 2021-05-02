import React from "react";
import { Main } from "../../Components/Main/Main";
import { Sidebar } from "../../Components/Sidebar";
import "./Dashboard.css";
import { Routes, Route } from "react-router-dom";
import { Channels } from "../../Components/Channels";

export const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/create" element={<Channels />}></Route>
      </Routes>
    </>
  );
};
