import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import { useChannelsProvider } from "../../Context/ChannelsContext";
import "./CardWrapper.css";

export const CardWrapper = () => {
  const { channels } = useChannelsProvider();

  return (
    <div className="cardWrapper mT4">
      <div className="cardWrapperHeader mB1 flex j-space-between a-items-center">
        <h1 className="cardWrapperTitle">Featured Events</h1>
        <Link to="all" className="seeAll">
          See All
        </Link>
      </div>

      <section className="cards cardRow">
        {channels?.map((channel) => (
          <Card channel={channel} />
        ))}
      </section>
    </div>
  );
};
