import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [mouseOver, setMouseOver] = useState(0);
const [mouseLeave, setMouseLeave] = useState(0)

  const handleClick = (index) => {
    index = index + 1;
    console.log(index);
    setRating(index)
  };

  const handleMouseOver = (index) => {
    index = index + 1;
    console.log(index);
    setMouseOver(index)
  };

  const handleMouseOut = (index) => {
    index = index + 1;
    setMouseOver(rating)
  };
  return (
    <div className="main-wrapper" style={{backgroundColor: "white"}}>
      <div>
        {[...Array(numberOfStars)].map((star, index) => (
            <FaStar
              style={{
                color: (mouseOver || rating || mouseLeave) <= index ? "black" : "yellow"
              }}
              onClick={() => handleClick(index)}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
              onMouseLeave={(()=> setMouseLeave(index+1))}
              size={20}
              key={index+1}
            />
        
        ))}
      </div>
    </div>
  );
}
//https://picsum.photos/v2/list?page=1&limit=10