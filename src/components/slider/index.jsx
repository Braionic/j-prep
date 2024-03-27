import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
export default function Slider({ page = 1, limit = 10 }) {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setErrorMsg] = useState(null);

  useEffect(() => {
    fetchdata(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  }, []);

  const handleBack = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    console.log(currentSlide);
  };

  const handleFoward = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);

    console.log(currentSlide);
  };

  const fetchdata = (imageUrl) => {
    fetch(imageUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setErrorMsg(e.message);
      });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: 400,
        }}
      >
        <FaArrowCircleLeft
          onClick={handleBack}
          color="white"
          size={20}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            cursor: "pointer",
          }}
        />
        {data &&
          data.map((images, index) => {
            return (
              <img
                key={images.id}
                src={images.download_url}
                width={400}
                className={
                  currentSlide === index ? "sliderImg" : "sliderImg sliderHide"
                }
              />
            );
          })}
        <FaArrowAltCircleRight
          onClick={handleFoward}
          color="white"
          size={20}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            cursor: "pointer",
          }}
        />
        <div style={{ position: "absolute", bottom: 0, left: "30%" }}>
          {data.map((indicator, index) => {
            return (
              <button
                key={indicator.id}
                onClick={() => setCurrentSlide(index)}
                className={
                  index === currentSlide
                    ? "indicator"
                    : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
}
