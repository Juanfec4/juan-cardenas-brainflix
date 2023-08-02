import MediaButtons from "./MediaButtons";
import PlayButton from "./PlayButton";
import ScrubbingControl from "./ScrubbingControl";
import "./VideoPlayer.scss";
const VideoPlayer = ({ mediaObject }) => {
  const { video, image, duration } = mediaObject;
  return (
    <>
      <section className="video">
        <div className="video__container">
          <video className="video__content" poster={image}></video>
          <source src={video} />
          <div className="video__controls">
            <PlayButton />
            <ScrubbingControl playTime={"0:00"} durationTime={duration} />
            <MediaButtons />
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer;
