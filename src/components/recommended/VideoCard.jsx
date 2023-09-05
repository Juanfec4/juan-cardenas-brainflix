import "./VideoCard.scss";
const VideoCard = ({ video, handleClick }) => {
  const { title, channel, image, id } = video;
  return (
    <li className="video-card" id="id">
      <img src={image} alt={title} className="video-card__image" onClick={() => handleClick(id)} />
      <span className="video-card__text-container">
        <h3 className="video-card__heading">{title}</h3>
        <p className="video-card__text">{channel}</p>
      </span>
    </li>
  );
};
export default VideoCard;
