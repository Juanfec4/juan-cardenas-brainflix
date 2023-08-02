import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import newCommentSrc from "../../assets/icons/add_comment.svg";
import InputBox from "../ui/InputBox";
import "./AddCommentForm.scss";
import InputArea from "../ui/InputArea";
const AddCommentForm = ({ avatarSrc, userName, handleChange, value, handleSubmit }) => {
  return (
    <form className="add-comment">
      <div className="add-comment__section--icon-container">
        <Avatar avatarSrc={avatarSrc} userName={userName} />
      </div>
      <div className="add-comment__section">
        <span className="add-comment__input">
          <InputBox
            handleChange={handleChange}
            value={value}
            placeholder={"Add a new comment"}
            id={"new-comment"}
            label={"JOIN THE CONVERSATION"}
          />
        </span>
        <span className="add-comment__input-area">
          <InputArea
            handleChange={handleChange}
            value={value}
            placeholder={"Add a new comment"}
            id={"new-comment"}
            label={"JOIN THE CONVERSATION"}
          />
        </span>
        <Button text={"COMMENT"} iconSrc={newCommentSrc} handleClick={handleSubmit} />
      </div>
    </form>
  );
};
export default AddCommentForm;
