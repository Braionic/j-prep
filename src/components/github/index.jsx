import React, { useEffect, useState } from "react";
import "../github/style.css";
import ProfileCard from "./ProfileCard";
export default function GitHubProfile() {
  const [myData, setMyData] = useState("");
  const [input, setInput] = useState("braionic");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  
  async function fetchData(dataUrl) {
    setIsloading(true);
    setError("");
    try {
      const response = await fetch(dataUrl);
      if (response.ok === false) {
        setError("no user was found or invalid url");
      }
      console.log(response);
      const data = await response.json();
      data && setMyData(data);
      setIsloading(false);
    } catch (error) {
      setError(error.message);
      setIsloading(false);
    }
    setInput("");
  }

  const handleSubmit = () => {
    fetchData(`https://api.github.com/users/${input}`);
  };
  useEffect(() => {
    fetchData(`https://api.github.com/users/${input}`);
  }, []);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <p>{error}</p>{" "}
        <button
          onClick={() => fetchData(`https://api.github.com/users/braionic`)}
        >
          go Back
        </button>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          fontSize: "22px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>GitHubProfile</h2>
      <div className="input">
        <input
          onChange={(e) => setInput(e.target.value)}
          style={{
            margin: "5px",
            padding: "5px",
            border: "none",
            borderBottom: "1px solid gray",
            borderRight: "1px solid gray",
          }}
          type="text"
          name="name"
          placeholder="enter username"
          value={input}
        />
        <button
          disabled={!input ? true : false}
          style={{ backgroundColor: !input ? "grey" : "black" }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <div className="profileCard">
        <ProfileCard goData={myData} />
      </div>
    </div>
  );
}
