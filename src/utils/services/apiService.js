import axios from "axios";

const getVideo = async (index) => {
  try {
    const response = await axios.get("./db/video-details.json");
    return response.data[index];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default { getVideo };
