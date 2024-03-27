import React, { useState } from "react";
import Menulist from "./Menulist";

export default function Menuitem({ menu }) {
  const [currentState, setCurrentState] = useState({});
  const handleclick = (label) => {
    setCurrentState({ ...currentState, [label]: !currentState[label] });
  };
  console.log(currentState)
  return (
    <ul>
      {menu &&
        menu.map((menuLink, index) => {
          return (
            <>
              <li className="label-container">
                <p>{menuLink.label}</p>
                {menuLink.children && (
                  <span onClick={() => handleclick(menuLink.label)}>{currentState[menuLink.label] ? "-": "+"}</span>
                )}
              </li>
              {currentState[menuLink.label] && <Menulist link={menuLink} />}
            </>
          );
        })}
    </ul>
  );
}
