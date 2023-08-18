import { useParams, useLocation } from "react-router-dom";
import VideoPlayer from "../../components/video/VideoPlayer";
import apiService from "../../utils/services/apiService";
import Description from "../../components/description/Description";
import CommentSection from "../../components/comments/CommentSection";
import RecommendedVideos from "../../components/recommended/RecommendedVideos";
import avatarImg from "../../assets/images/Mohan-muruge.jpg";
import { useEffect, useState, useMemo, experimental_useOptimistic as useOptimistic } from "react";
import "./VideoPage.scss";

const VideoPage = () => {
  const [video, setVideo] = useState("");
  const [videos, setVideos] = useState("");
  const [optimisticVideo, setOptimisticVideo] = useOptimistic(video ? video : {});
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

  const handleNewComment = async (text) => {
    const comment = {
      name: "User",
      comment: text,
      timestamp: new Date(),
    };
    setOptimisticVideo((prev) => ({ ...prev, comments: [...prev.comments, comment] }));
    const response = await apiService.postComment(video.id, { name: "User", comment: text });
    if (response) {
      const updatedVideo = await apiService.getVideo(video.id);
      setVideo(updatedVideo);
    }
  };

  return (
    <>
      <VideoPlayer mediaObject={optimisticVideo} />
      <main className="video-page__content">
        <section className="video-page__main-content">
          <Description mediaObject={optimisticVideo} />
          {optimisticVideo.comments ? (
            <CommentSection
              comments={optimisticVideo.comments}
              avatarImg={avatarImg}
              userName={"User"}
              handleNewComment={handleNewComment}
            />
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
