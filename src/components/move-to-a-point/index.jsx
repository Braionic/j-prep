import React, { useRef } from "react";
import "./style.css";
export default function ScrollToPoint() {
  const ref = useRef();
  const sections = [
    {
      label: "section one",
      width: "100%",
      heigth: "600px",
      backgroundColor: "red",
    },
    {
      label: "section two",
      width: "100%",
      heigth: "600px",
      backgroundColor: "green",
    },
    {
      label: "section three",
      width: "100%",
      heigth: "600px",
      backgroundColor: "yellow",
    },
    {
      label: "section four",
      width: "100%",
      heigth: "600px",
      backgroundColor: "blue",
    },
  ];

  const handleScroll = () => {
    console.log("i was clicked");
    const pos = ref.current.getBoundingClientRect().top;
    return window.scrollTo({ top: pos, left: 0, behavior: "smooth" });
  };
  return (
    <div className="mainWrapper">
      <button
        onClick={handleScroll}
        style={{
          color: "black",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          margin: "5px",
          padding: "5px 10px",
        }}
      >
        scroll to section
      </button>
      <div className="pages">
        {sections && sections.length
          ? sections.map((section, Index) => {
              Index += 1;
              console.log(Index);
              return (
                <div
                  ref={Index === 3 ? ref : null}
                  style={{
                    width: section.width,
                    backgroundColor: section.backgroundColor,
                    height: section.heigth,
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>{section.label}</h3>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
