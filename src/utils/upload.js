import axios from "axios";
// todo
// secure the url
const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "");

  try {
    const res = await axios.post("", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
