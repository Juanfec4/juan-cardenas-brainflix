import VideoCard from "./VideoCard";
import "./RecommendedVideos.scss";
import { useNavigate } from "react-router-dom";
const RecommendedVideos = ({ videos, currentVideo }) => {
  const navigate = useNavigate();

  const handleGoToVideoPage = (id) => {
    navigate(`../${id}`, { state: { videos } });
  };

  return (
    <section className="recommended">
      <h2 className="recommended__heading">Next Videos</h2>
      {videos
        ? videos.map((video) => {
            if (video.id !== currentVideo.id) {
              return <VideoCard key={video.id} video={video} handleClick={handleGoToVideoPage} />;
            }
          })
        : null}
    </section>
  );
};
export default RecommendedVideos;
