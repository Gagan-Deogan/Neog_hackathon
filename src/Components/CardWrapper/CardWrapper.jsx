import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import "./CardWrapper.css";

export const CardWrapper = () => {
  return (
    <div className="cardWrapper mT4">
      <div className="cardWrapperHeader mB1 flex j-space-between a-items-center">
        <h1 className="cardWrapperTitle">Featured Events</h1>
        <Link to="all" className="seeAll">
          See All
        </Link>
      </div>

      <section className="cards ">
        <Card />
      </section>
    </div>
  );
};
