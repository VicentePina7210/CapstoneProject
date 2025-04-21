// src/components/PdfUploader.tsx

import React, { useState } from "react";
import axios from "axios";

const PdfUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/v1/api/embed/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Upload a PDF</h3>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button className="btn btn-primary mt-2" onClick={handleUpload}>
        Upload
      </button>
      <p>{message}</p>
    </div>
  );
};

export default PdfUploader;
