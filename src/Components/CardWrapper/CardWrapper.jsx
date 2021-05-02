import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import { useChannelsProvider } from "../../Context/ChannelsContext";
import "./CardWrapper.css";

export const CardWrapper = () => {
  const { channels } = useChannelsProvider();

  return (
    <div className="cardWrapper mT4">
      <section className="cards cardRow">
        {channels?.map((channel) => (
          <Card channel={channel} />
        ))}
      </section>
    </div>
  );
};
