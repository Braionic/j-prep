import React, { useLayoutEffect, useState } from "react";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    heigth: 0,
  });
  function handleResize() {
    setWindowSize({ width: window.innerWidth, heigth: window.innerHeight });
  }
  useLayoutEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
