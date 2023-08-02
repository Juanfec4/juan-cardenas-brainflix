import axios from "axios";

const getVideo = async () => {
  try {
    const response = await axios.get("./db/video-details.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default { getVideo };
