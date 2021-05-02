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
      <Main />
      <Routes>
        <Route path="/dashboard/create" element={Channels}></Route>
      </Routes>
      ;
    </>
  );
};
