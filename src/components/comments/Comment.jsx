import { useEffect, useState } from "react";
import dateFormatter from "../../utils/format/dateFormatter";
import Avatar from "../ui/Avatar";
import Divider from "../ui/Divider";
import "./Comment.scss";
const Comment = ({ commentObject }) => {
  const { name, comment, timestamp } = commentObject;
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(dateFormatter.getSimplifiedFormat(timestamp));
  }, [timestamp]);
  return (
    <>
      <div className="comment">
        <div className="comment__avatar-container">
          <Avatar />
        </div>
        <div className="comment__content-container">
          <span className="comment__metadata">
            <h3 className="comment__heading">{name}</h3>
            <p className="comment__timestamp">{date}</p>
          </span>
          <p className="comment__text">{comment}</p>
        </div>
      </div>
      <Divider />
    </>
  );
};
export default Comment;
