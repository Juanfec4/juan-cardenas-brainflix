import { useEffect, useState } from "react";
import dateFormatter from "../../utils/format/dateFormatter";
import IconCounter from "../ui/IconCounter";
import eyeballSrc from "../../assets/icons/views.svg";
import heartSrc from "../../assets/icons/likes.svg";

import "./StatSection.scss";
import Divider from "../ui/Divider";

const StatSection = ({ mediaObject }) => {
  const { views, likes, channel, timestamp } = mediaObject;
  const [date, setDate] = useState("");

  useEffect(() => {
    if (timestamp) {
    }
    setDate(dateFormatter.getSimplifiedFormat(timestamp));
  }, [timestamp]);

  return (
    <>
      <div className="stats">
        <section className="stats__section">
          <h3 className="stats__channel">By {channel}</h3>
          <p className="stats__date">{date}</p>
        </section>
        <section className="stats__section">
          <IconCounter iconSrc={eyeballSrc} alt={"views"} count={views} />
          <IconCounter iconSrc={heartSrc} alt={"likes"} count={likes} />
        </section>
      </div>
    </>
  );
};

export default StatSection;
