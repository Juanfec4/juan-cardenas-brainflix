import "./VideoCard.scss";
const VideoCard = ({ video, handleClick }) => {
  const { title, channel, image, id } = video;
  console.log(video);
  return (
    <div className="video-card">
      <img src={image} alt={title} className="video-card__image" onClick={handleClick} id={id} />
      <span className="video-card__text-container">
        <h3 className="video-card__heading">{title}</h3>
        <p className="video-card__text">{channel}</p>
      </span>
    </div>
  );
};
export default VideoCard;
