import { useEffect, useState, useMemo } from "react";
import "./App.scss";
import VideoPlayer from "./components/video/VideoPlayer";
import apiService from "./utils/services/apiService";
import Description from "./components/description/Description";
import CommentSection from "./components/comments/CommentSection";
import avatarImg from "./assets/images/Mohan-muruge.jpg";

import RecommendedVideos from "./components/recommended/RecommendedVideos";
import videoHelpers from "./utils/helpers/videos";
function App() {
  const [video, setVideo] = useState("");
  const [videos, setVideos] = useState("");
  const [currentVideoID, setCurrentVideoID] = useState("");

  useEffect(() => {
    apiService.getVideos().then((response) => {
      setVideos(response);
    });
  }, [currentVideoID]);

  useMemo(() => {
    if (videos) {
      apiService.getVideo(videos[0].id).then((response) => {
        setVideo(response);
      });
    }
  }, [videos]);

  const handleDisplayVideo = (e) => {
    setCurrentVideoID(videoHelpers.getVideoIndexById(e.target.id, videos));
  };

  return (
    <>
      <VideoPlayer mediaObject={video} />
      <main className="page__content">
        <section className="page__main-content">
          <Description mediaObject={video} />
          {video.comments ? (
            <CommentSection comments={video.comments} avatarImg={avatarImg} userName={"User"} />
          ) : null}
        </section>
        <aside className="page__side-content">
          <RecommendedVideos
            videos={videos}
            currentVideo={video}
            handleClick={handleDisplayVideo}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
