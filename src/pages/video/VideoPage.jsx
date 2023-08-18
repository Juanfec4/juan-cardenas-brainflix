import { useParams, useLocation } from "react-router-dom";
import VideoPlayer from "../../components/video/VideoPlayer";
import apiService from "../../utils/services/apiService";
import Description from "../../components/description/Description";
import CommentSection from "../../components/comments/CommentSection";
import RecommendedVideos from "../../components/recommended/RecommendedVideos";
import avatarImg from "../../assets/images/Mohan-muruge.jpg";
import { useEffect, useState, useMemo } from "react";
import "./VideoPage.scss";

const VideoPage = () => {
  const [video, setVideo] = useState("");
  const [videos, setVideos] = useState("");
  const params = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (params?.id) {
      apiService.getVideo(params.id).then((response) => {
        setVideo(response);
      });
    } else if (!params?.id && videos.length) {
      apiService.getVideo(videos[0].id).then((response) => {
        setVideo(response);
      });
    }
  }, [videos, params?.id]);

  useMemo(() => {
    if (state?.videos) {
      setVideos(state.videos);
    } else {
      apiService.getVideos().then((response) => {
        setVideos(response);
      });
    }
  }, [videos]);

  return (
    <>
      <VideoPlayer mediaObject={video} />
      <main className="video-page__content">
        <section className="video-page__main-content">
          <Description mediaObject={video} />
          {video.comments ? (
            <CommentSection comments={video.comments} avatarImg={avatarImg} userName={"User"} />
          ) : null}
        </section>
        <aside className="video-page__side-content">
          <RecommendedVideos videos={videos} currentVideo={video} />
        </aside>
      </main>
    </>
  );
};
export default VideoPage;
