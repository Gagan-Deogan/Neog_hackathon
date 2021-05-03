import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import { useChannelsProvider } from "../../Context/ChannelsContext";
import { isEventOpen } from "../../Utils/isEventOpen";
import "./CardWrapper.css";

export const CardWrapper = () => {
  const { channels } = useChannelsProvider();

  return (
    <div className="cardWrapper mT4">
      <section className="cards cardRow">
        {channels?.map(
          (channel) =>
            !isEventOpen({ schedule: channel.schedule }) && (
              <Card channel={channel} />
            )
        )}
      </section>
    </div>
  );
};
