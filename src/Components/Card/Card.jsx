import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Card.css";
import Banner from "../../assests/images/banner.jpg";
import { Link, NavLink } from "react-router-dom";

export const Card = () => {
  return (
    <div className="cardRow">
      <NavLink to="/dashboard/channelName">
        <div className="card">
          <div className="cardImage">
            <img src={Banner} className="cardImg" alt="banner" />
          </div>
          <div className="cardBody">
            <h1 className="cardTitle">How to talk to anyone?</h1>
            <h2 className="cardSubtitle">Suyash Pradhan</h2>
            <p className="timing">
              <FaIcons.FaClock /> Today at 2.30PM
            </p>
          </div>
        </div>
      </NavLink>
      <Link to="channel2">
        <div className="card">
          <div className="cardImage">
            <img src={Banner} className="cardImg" alt="banner" />
          </div>
          <div className="cardBody">
            <h1 className="cardTitle">
              Get Started with coding by doing a simple todo-app
            </h1>
            <h2 className="cardSubtitle">Gagandeep Singh</h2>

            <p className="timing">
              <FaIcons.FaCalendar /> 17th May, At 11.30PM
            </p>
          </div>
        </div>
      </Link>
      <Link to="channel2">
        <div className="card">
          <div className="cardImage">
            <img src={Banner} className="cardImg" alt="banner" />
          </div>
          <div className="cardBody">
            <h1 className="cardTitle">
              Learn Designing by prototyping a UI/UX Mockup
            </h1>
            <h2 className="cardSubtitle">Nada Farook</h2>
            <p className="timing">
              <FaIcons.FaCalendar /> 4th May, At 2.30PM
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
