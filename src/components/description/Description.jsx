import Divider from "../ui/Divider";
import StatSection from "./StatSection";
import "./Description.scss";
const Description = ({ mediaObject }) => {
  const { title, description } = mediaObject;
  return (
    <div className="video-description">
      <h1 className="video-description__title">{title}</h1>
      <span className="hidden--md">
        <Divider />
      </span>
      <StatSection mediaObject={mediaObject} />
      <Divider />
      <p className="video-description__text">{description}</p>
    </div>
  );
};

export default Description;
