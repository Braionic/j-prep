import React, { useEffect } from "react";

export default function useOutsideClick(ref, handleHide) {
  useEffect(() => {
    function listenerHandler(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        console.log("i was clicked");
        return;
      }
      handleHide(event);
    }

    document.addEventListener("mousedown", listenerHandler);
    document.addEventListener("touchstart", listenerHandler);
    return () => {
      document.removeEventListener("mousedown", listenerHandler);
      document.removeEventListener("touchstart", listenerHandler);
    };
  }, [ref, handleHide]);
}
