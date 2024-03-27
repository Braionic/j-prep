import React from "react";

export default function ButtonComponent({ value, onClick }) {
  return (
    <div className="each-boxes" onClick={onClick}>
      <p style={{fontSize: "20px", fontWeight: "bold"}}>{value}</p>
    </div>
  );
}
