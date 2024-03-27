import React from "react";
import "../linkTree/style.css";
import Menuitem from "./Menuitem";

export default function LinkTree({ menu }) {
  return (
    <div className="main-container">
      <Menuitem menu={menu} />
    </div>
  );
}
