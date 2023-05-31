import React, { useEffect, useState } from "react";

const RingtoneUploader = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResult(null);
    setError(null);
  }, [file, data]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!file) {
        setError("Please select a file");
        return;
      }
      
      const formData = new FormData();
      formData.append("file", file);
      formData.append("data", data);

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/ringtones/add`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result); // Log the response from the server

      if (response.ok) {
        setResult(result);
        setError(null);
      } else {
        setError("Failed to upload file");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="text" value={data} onChange={handleDataChange} />
      <button onClick={handleSubmit}>Upload and Save</button>

      {result && (
        <div>
          <p>File URL: {result.fileUrl}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default RingtoneUploader;
