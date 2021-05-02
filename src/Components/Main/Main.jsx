import React from "react";
import { Header } from "../Header";
import { Greeting } from "../Greeting";
import "./Main.css";
import { CardWrapper } from "../CardWrapper";
import { useSidebarContext } from "../../Context/SidebarContext";

export const Main = () => {
  const { state } = useSidebarContext();

  return (
    <div className={state ? "mainToggled" : "main"}>
      <Header />
      <main className="mainWrapper">
        <Greeting />
        <CardWrapper />
      </main>
    </div>
  );
};
