import axios from "axios";

const config = {
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

const getVideos = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/videos`, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const getVideo = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/videos/${id}`, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const postComment = async (id, comment) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/videos/${id}/comments`,
      comment,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const postVideo = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/videos/`, data, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

// const getVideosMinified = async () => {
//   try {
//     const response = await axios.get("./db/videos.json");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return undefined;
//   }
// };

export default { getVideos, getVideo, postComment, postVideo };
