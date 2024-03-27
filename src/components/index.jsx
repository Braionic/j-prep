import React, { useState } from "react";
import { data } from "./data";
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isMulti, setIsmulti] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleClick = (id) => {
    setSelected((oldVal) => {
      return oldVal === id ? null : id;
    });
  };

  const handleMultiSet = () => {
    setIsmulti((oldval) => !oldval);
  };

  const handleMultiSetFunction = (id) => {
    let currentValues = [...multiSelected];
    const getIndex = currentValues.indexOf(id);
    if (getIndex === -1) {
      currentValues.push(id);
      setMultiSelected(currentValues);
    } else {
      const newVal = currentValues.splice(getIndex, 1);
      setMultiSelected(currentValues);
    }
    console.log(multiSelected);
  };

  return (
    <div className="main-wrapper">
      <button className="multi-button" onClick={() => handleMultiSet()}>
        {isMulti ? "Multi-Accordion is Enabled" : "Single-Accordion is enabled"}
      </button>
      <p style={{ color: "red" }}>{isMulti ? "true" : "false"}</p>
      {data.map((data) => {
        return (
          <div className="wrapper" key={data.id}>
            <div
              className="title"
              onClick={() =>
                isMulti
                  ? handleMultiSetFunction(data.id)
                  : handleSingleClick(data.id)
              }
            >
              <p>{data.question}</p>
              <span>+</span>
            </div>

            {isMulti
              ? multiSelected.indexOf(data.id) !== -1 && (
                  <div className="body">
                    <p>{data.answer}</p>
                  </div>
                )
              : selected === data.id && (
                  <div className="body">
                    <p>{data.answer}</p>
                  </div>
                )}
          </div>
        );
      })}
    </div>
  );
}
