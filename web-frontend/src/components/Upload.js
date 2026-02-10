import React, { useState } from "react";
import api from "../api";

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select CSV first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Upload successful!");
      console.log(response.data);
    } catch (error) {
      // Surface the real backend error to help debugging
      const messageFromBackend =
        error?.response?.data?.error ||
        (typeof error?.response?.data === "string"
          ? error.response.data
          : null);

      const fallbackMessage =
        error?.message || "Unknown error. Check browser console for details.";

      console.error("Upload error:", error.response || error);
      alert("Upload failed: " + (messageFromBackend || fallbackMessage));
    }
  };

  return (
    <div className="upload-row">
      <input
        className="upload-input"
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default Upload;
