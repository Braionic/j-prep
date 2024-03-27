import React, { useEffect, useState } from "react";
import "../loadmore/style.css";

export default function Loadmore() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isdisabled, setIsdisabled] = useState(false);

  useEffect(() => {
    if (data.length === 100) {
      setIsdisabled(true);
    }
  }, [count]);
  useEffect(() => {
    fetchData(
      `https://dummyjson.com/products?limit=${20}&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
  }, [count]);

  const handleData = () => {
    setCount((oldval) => oldval + 1);
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData((oldval) => [...oldval, ...data.products]);
        console.log(data)
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="main-container">
      {data &&
        data.map((data) => {
          return (
            <div key={data.id} className="product-container">
              <img
                src={data.thumbnail}
                alt={data.title}
                width={200}
                height={200}
                style={{ borderRadius: "8px" }}
              />
              <div className="product-details">
                <h4>Category: {data.title}</h4>
                <h3>Price: {data.price}</h3>
                <p>Rating: {data.rating}</p>
              </div>
            </div>
          );
        })}
      <button
        disabled={isdisabled}
        onClick={handleData}
        style={{ padding: "10px", margin: "25px" }}
      >
        {data.length < 100 ? "Load More": "No More Items to load"}
      </button>
    </div>
  );
}
