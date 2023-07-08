import axios from "axios";

const uploadFile = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverrr");

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  try {
    const res = await axios.post(
      "",
      data
    );

    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error.message);
  }
};

export default uploadFile;
