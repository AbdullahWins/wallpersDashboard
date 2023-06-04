import React, { useEffect, useState } from "react";

const RingtoneUploader = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    uId: "1",
    userID: "12345",
    platform: "platform A",
    name: "Dummy Item 1",
    author: "Noyon 1",
    tags: ["tag1", "tag2"],
    category: "category A",
    colors: ["red", "blue"],
    description: "This is the description for Dummy Item 1.",
    isMatureContent: false,
    availability: "free",
    price: 0,
    status: "paused",
    timestamp: 1677638400,
    isTrending: true,
    isCreatorChoice: true,
    like: ["user1", "user2"],
    used: 10,
    purchasedUser: ["user3", "user4"],
    downloaded: ["user5", "user6"],
  });
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
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("submitting");
    try {
      if (!file) {
        setError("Please select a file");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("data", JSON.stringify(data));
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/banners/add`,
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
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleDataChange}
      />
      <input
        type="text"
        name="name2"
        value={data.name2}
        onChange={handleDataChange}
      />
      <input
        type="text"
        name="name3"
        value={data.name3}
        // onChange={handleDataChange}
      />

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
