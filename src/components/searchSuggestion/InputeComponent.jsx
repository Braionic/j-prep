import React from "react";

export default function InputComponent({ users, value, setvalue }) {
  return (
    <div>
      <input
        onChange={(e) => setvalue(e.target.value)}
        type="text"
        name="search-input"
        value={value}
        placeholder="Enter search"
      />
    </div>
  );
}
