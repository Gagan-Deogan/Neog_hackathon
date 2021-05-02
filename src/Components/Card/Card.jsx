import React from "react";
import * as FaIcons from "react-icons/fa";

import "./Card.css";
import { Link } from "react-router-dom";
function toDateTime(secs) {
  var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
  t.setUTCSeconds(secs);
  return (
    " " +
    new Date(t).toLocaleDateString("en-US") +
    " at " +
    new Date(t).toLocaleTimeString("en-US")
  );
}
export const Card = ({ channel }) => {
  const startAt = toDateTime(channel.schedule.seconds);
  return (
    <div className="card">
      <div className="cardImage">
        <img src={channel.imageUrl} className="cardImg" alt="banner" />
      </div>
      <div className="cardBody">
        <h1 className="cardTitle">{channel.name}</h1>
        <h2 className="cardSubtitle">{channel.createdBy}</h2>
        <p className="timing">
          <FaIcons.FaClock />
          {startAt}
        </p>
      </div>
    </div>
  );
};
