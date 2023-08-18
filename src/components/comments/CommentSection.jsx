import { useEffect, useState } from "react";
import AddCommentForm from "./AddCommentForm";

import "./CommentSection.scss";
import Divider from "../ui/Divider";
import CommentGallery from "./CommentGallery";
const CommentSection = ({ comments, avatarImg, userName, handleNewComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  const handlePostNewComment = (e) => {
    e.preventDefault();
    handleNewComment(newComment);
    setNewComment("");
  };
  return (
    <div className="comment-section">
      <h3 className="comment-section__comment-count">{comments.length} comments</h3>
      <AddCommentForm
        value={newComment}
        handleChange={handleNewCommentChange}
        handleSubmit={handlePostNewComment}
        avatarSrc={avatarImg}
        userName={userName}
      />
      <Divider />
      <CommentGallery comments={comments} />
    </div>
  );
};

export default CommentSection;
