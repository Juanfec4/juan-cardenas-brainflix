import UploadForm from "../../components/forms/UploadForm";
import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";
import Divider from "../../components/ui/Divider";
import apiService from "../../utils/services/apiService";
const UploadPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (titleRef, descriptionRef) => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const newVideo = { title, description };

    apiService.postVideo(newVideo).then((response) => {
      navigate("../");
    });
  };
  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Video</h1>
      <Divider />
      <UploadForm handleSubmit={handleSubmit} />
    </main>
  );
};
export default UploadPage;
