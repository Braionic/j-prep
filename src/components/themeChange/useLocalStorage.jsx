import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || defaultValue);
    } catch (error) {
        console.log(error)
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
