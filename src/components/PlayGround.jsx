import React, { createContext, useContext, useState } from "react";
export const myContext = ({ children }) => {
  return <context.Provider value={state}>{children}</context.Provider>;
};

export const featureFlagsApiCall =()=>{
  return new Promise((resolve, reject)=>{
    if(data){
      resolve(data)
    }else{
      reject()
    }
  })
}
export const context = createContext(null);
export default function PlayGround() {
  const [multiline, setMultiline] = useState([]);

  const handleClick = (id) => {
    //if available remove just that else push
    let currentlyselected = [...multiline];

    if (currentlyselected.indexOf(id) === -1) {
      currentlyselected.push(id);
      setMultiline(currentlyselected);
    } else {
      const getIndex = currentlyselected.indexOf(id);
      const newArray = currentlyselected.splice(getIndex, 1);
      setMultiline(currentlyselected);
    }
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPosion =
      document.body.scrollTop || document.documentElement.scrollTop;
    const currposInPer = (scrollPosion / height) * 100;
  };
  
  return (
    <div>
      <button
        onClick={() => {
          handleClick(id);
        }}
      >
        Click
      </button>

      {multiline.indexOf(id) !== -1 && data.comtent}
    </div>
  );
}
