import { useEffect, useState } from "react";
import "./App.scss";
import NavBar from "./components/layout/Navbar";
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
  const [currentVideoID, setCurrentVideoID] = useState(0);
  useEffect(() => {
    apiService.getVideos().then((response) => {
      setVideo(response[currentVideoID]);
    });
    apiService.getVideosMinified().then((response) => {
      setVideos(response);
    });
  }, [currentVideoID]);

  const handleDisplayVideo = (e) => {
    setCurrentVideoID(videoHelpers.getVideoIndexById(e.target.id, videos));
  };

  return (
    <>
      <NavBar avatarImg={avatarImg} userName={"User"} />
      <VideoPlayer mediaObject={video} />
      <Description mediaObject={video} />
      {video.comments ? (
        <CommentSection comments={video.comments} avatarImg={avatarImg} userName={"User"} />
      ) : null}
      <RecommendedVideos videos={videos} currentVideo={video} handleClick={handleDisplayVideo} />
    </>
  );
}

export default App;
