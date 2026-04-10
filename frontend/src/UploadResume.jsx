import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./upload.css";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      navigate("/dashboard", { state: { data: res.data.data } });

    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">

        <h1>AI Resume</h1>
        <h1>Analyzer</h1>
        <br />
        <p>Upload your resume and get instant feedback</p>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && <p className="file-name">{file.name}</p>}

        <button onClick={handleUpload}>
          Analyze Resume 🚀
        </button>

      </div>
    </div>
  );
}