import React from "react";

export default function Suggestions({
  toggleSuggestion,
  filteredText,
  setValue,
  setShowSuggestion
}) {
  const handleClick = (e) => {
    setValue(e.target.innerText)
    setShowSuggestion(false)
  };
  return (
    <div>
        <p>Please type at least 2 characters. The results will start displaying here immediately.</p>
      {toggleSuggestion &&
        filteredText.map((text, index) => (
          <p style={{cursor: "pointer"}} onClick={(e) => handleClick(e)} key={index}>
            {text}
          </p>
        ))}
    </div>
  );
}
