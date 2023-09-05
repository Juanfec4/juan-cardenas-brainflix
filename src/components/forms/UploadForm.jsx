import uploadIcon from "../../assets/icons/upload.svg";
import Button from "../ui/Button";
import InputArea from "../ui/InputArea";
import InputBox from "../ui/InputBox";

import "./UploadForm.scss";
import { useRef } from "react";
import Divider from "../ui/Divider";

const UploadForm = ({ handleSubmit }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  return (
    <form
      className="upload-form"
      onSubmit={(e) => {
        e.preventDefault();
        window.alert("upload success");
        handleSubmit(titleRef, descriptionRef);
      }}
    >
      <div className="upload-form__content">
        <span className="upload-form__image-container">
          <h3 className="upload-form__label">video thumbnail</h3>
          <img
            src={`${process.env.REACT_APP_API_URL}/images/Upload-video-preview.jpg`}
            className="upload-form__image"
          />
        </span>
        <span className="upload-form__input-container">
          <InputBox
            label={"Title your video"}
            placeholder={"Add a title to your video"}
            customRef={titleRef}
          />
          <InputArea
            label={"Add a video description"}
            placeholder={"Add a description to your video"}
            customRef={descriptionRef}
          />
        </span>
      </div>
      <Divider />
      <div className="upload-form__button-container">
        <Button text={"publish"} iconSrc={uploadIcon} />
        <button className="upload-form__link">Cancel</button>
      </div>
    </form>
  );
};
export default UploadForm;
