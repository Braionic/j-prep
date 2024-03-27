import React, { useEffect, useState } from "react";
import "../scrollIndicator/style.css";

export default function ScrollIndicator({ url }) {
  const [myData, setMydata] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [currentPercent, setCurrenctPercent] = useState(0);

  const handleScroll = () => {
    const currentPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentageHeight = (currentPosition / height) * 100;
    percentageHeight && setCurrenctPercent(percentageHeight);
  };
  async function handleData(api) {
    try {
      setIsloading(true);
      const response = await fetch(api);
      const data = await response.json();
      if (data.products.length > 0) {
        setMydata(data.products);
        setIsloading(false);
      } else {
        console.log("no data to display");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  console.log(myData);
  useEffect(() => {
    handleData(url);
  }, [url]);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", () => {});
  }, []);

  if (error) {
    return (
      <div>
        <p>An error occured: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="main-div">
        <div style={{height: "20px", width: "100%", backgroundColor: "green", position: "fixed", top: 0}}>
      <div
        style={{
          
          height: "20px",
          width: `${currentPercent}%`,
          backgroundColor: "gray",
        }}
      >
        <p> {currentPercent && currentPercent}%</p>

      </div>
      </div>

      <p>ScrollIndicator</p>
      {myData &&
        myData.map((item) => {
          return (
            <div>
              <p>{item.title}</p>
            </div>
          );
        })}
    </div>
  );
}
