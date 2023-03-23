import { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [images, setFile] = useState("");

  const handleFile = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("succes");
    // call target api
    const url = "";

    const formData = new FormData();
    formData.append("image", images);

    axios.post(url, formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <h1> Image upload</h1>
      <input type="file" onChange={handleFile} />
      <button type="submit" onChange={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default ImageUpload;
