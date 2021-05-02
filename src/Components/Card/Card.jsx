import React from "react";
import * as FaIcons from "react-icons/fa";

import "./Card.css";
import Banner from "../../assests/images/banner.jpg";
import { Link } from "react-router-dom";

export const Card = ({ channel }) => {
  console.log({ channel: channel.startAt });
  return (
    <Link to="channel2">
      <div className="card">
        <div className="cardImage">
          <img src={Banner} className="cardImg" alt="banner" />
        </div>
        <div className="cardBody">
          <h1 className="cardTitle">{channel.name}</h1>
          <h2 className="cardSubtitle">{channel.createdBy}</h2>
          <p className="timing">
            <FaIcons.FaClock /> 10 May 2021 At 2:30pm
          </p>
        </div>
      </div>
    </Link>
  );
};
