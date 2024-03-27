import React, { createContext, useEffect, useState } from "react";
import flagDataPromise from "./featureFlagData";
export const contextData = createContext(null);
export default function FeatureContext({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await flagDataPromise();
      setData(response)
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <contextData.Provider value={{ data }}>
      {children}
    </contextData.Provider>
  );
}
