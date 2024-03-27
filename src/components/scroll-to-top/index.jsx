import React, { useRef } from "react";
import "./style.css";
import useFetch from "../customHooks/useFetch";
export default function ScrollToTop() {
  const ref = useRef();
  const [data, isLoading, error] = useFetch(
    "https://dummyjson.com/products?limit=100"
  );

  function handleToTop() {
    return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function handleToBottom() {
    return ref.current.scrollIntoView({ behavior: "smooth" });
  }
  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if(error){
return (<div>
    <h1>{error}</h1>
  </div>)
  }
  return (
    <div className="main-me">
      <button style={{color: "black", marginBottom: "10px"}} onClick={handleToBottom}>Scroll to Bottom</button>
      {data && data.products && data.products.length > 0
        ? data.products.map((product) => {
            return (
              <div>
                <ul>
                  <li>{product.title}</li>
                </ul>
              </div>
            );
          })
        : null}
      <button style={{ color: "black", margin: "10px" }} onClick={handleToTop}>
        Scroll to top
      </button>
      <div ref={ref}></div>
    </div>
  );
}
