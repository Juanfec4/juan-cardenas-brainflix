import { useEffect, useState } from "react";
import "./App.scss";
import NavBar from "./components/layout/Navbar";
import VideoPlayer from "./components/video/VideoPlayer";
import apiService from "./utils/services/apiService";
import Description from "./components/description/Description";
import CommentSection from "./components/comments/CommentSection";

import avatarImg from "./assets/images/Mohan-muruge.jpg";

function App() {
  const [video, setVideo] = useState("");

  useEffect(() => {
    apiService.getVideo(0).then((response) => {
      setVideo(response);
    });
  }, []);

  return (
    <>
      <NavBar avatarImg={avatarImg} userName={"User"} />
      <VideoPlayer mediaObject={video} />
      <Description mediaObject={video} />
      {video.comments ? (
        <CommentSection comments={video.comments} avatarImg={avatarImg} userName={"User"} />
      ) : null}
    </>
  );
}

export default App;
