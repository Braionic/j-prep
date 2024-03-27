import React, { useContext, useState } from "react";
import "./style.css";
import { contextData } from "./FeatureContext";
import ColorPicker from "../colorpicker";
import QrCode from "../qr-code";
import Themeswitch from "../themeChange";
import GitHubProfile from "../github";
import Multitab from "../multitab";
export default function FeatureFlag() {
  const { data } = useContext(contextData);

  const componentToDisplay = [
    {
      key: "colorpicker",
      component: <ColorPicker />,
    },
    {
      key: "themeChange",
      component: <Themeswitch />,
    },
    {
      key: "qrCode",
      component: <QrCode />,
    },
    { key: "gitHub", component: <GitHubProfile /> },
    { key: "multiTab", component: <Multitab /> }
  ];

  return (
    <div>
      {componentToDisplay.map((componentItem) => {
        console.log(data[componentItem.key]);
        return data[componentItem.key] && componentItem.component;
      })}
    </div>
  );
}
