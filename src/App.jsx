import { useEffect, useState } from "react";
import "./App.scss";
import NavBar from "./components/layout/Navbar";
import VideoPlayer from "./components/video/VideoPlayer";
import apiService from "./utils/services/apiService";
import Description from "./components/description/Description";
function App() {
  const [video, setVideo] = useState("");

  useEffect(() => {
    apiService.getVideo(0).then((response) => {
      setVideo(response);
    });
  }, []);

  return (
    <>
      <NavBar />
      <VideoPlayer mediaObject={video} />
      <Description mediaObject={video} />
    </>
  );
}

export default App;
