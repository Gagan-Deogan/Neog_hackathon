import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import "./Greeting.css";

export const Greeting = () => {
  const {
    user: { displayName },
  } = useAuthContext();
  return (
    <div className="greetings">
      <h1 className="title">Welcome, {displayName}</h1>
      <p className="subtitle">Hope your doing good!</p>
    </div>
  );
};
