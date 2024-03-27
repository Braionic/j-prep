import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("")
  useEffect(() => {
    
    fetchData(url);
   
  }, [url]);
  async function fetchData(api) {
    setLoading(true);
    try {
      const response = await fetch(api);
      const data = await response.json();
      if(data && data.products && data.products.length >0){
        setData(data);
      setLoading(false);
      }
    } catch (error) {
      setError(error.message)
      setLoading(false);
    }
  }

  return [data, isLoading, error];
}
