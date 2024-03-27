import React, { useState } from "react";
import "../multitab/multitab.css";

export default function Multitab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabData = [
    {
      label: "Tab 1",
      content: "content one",
    },
    {
      label: "Tab 2",
      content: "content two",
    },
    { label: "tab 3", content: "this is the 3rd tab" },
  ];

  const handleClick = (index) => {
    console.log(index);
    setCurrentIndex(index);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <div className="content-div">
        <div className="btn-group" style={{ display: "flex" }}>
          {tabData &&
            tabData.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className="tab-content"
                  style={{
                    padding: 10,
                    borderBottom:
                      index === currentIndex ? "none" : "1px solid grey",
                    cursor: "pointer",
                    color: index === currentIndex ? "black" : "white",
                    backgroundColor: index === currentIndex ? "white" : "green",
                    border: "1px solid grey",
                  }}
                >
                  <p>{tab.label}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className="content"
        style={{
          backgroundColor: "white",
          color: "black",
          width: "25%",
          padding: "20px",
        }}
      >
        <p>{tabData[currentIndex] && tabData[currentIndex].content}</p>
      </div>
    </div>
  );
}
