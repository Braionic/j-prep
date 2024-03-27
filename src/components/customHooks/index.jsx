import React, { useEffect } from "react";
import "./style.css";
import useFetch from "./useFetch";
import useWindowResize from "./useWindowResize";
export default function CustomHooks() {
  const windowResize = useWindowResize()
  const {width, heigth} = windowResize
  const [data, error, isLoading] = useFetch(
    "https://dummyjson.com/products?limit=20&skip=20"
  );
  console.log(data instanceof Array);
  console.log(isLoading);
  const mydata =
    data &&
    data.products &&
    data.products.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.title}</p>
        </div>
      );
    });
  if (isLoading === true) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }
  return <div className="custom-hooks-wrapper">
    <p>{width}</p>
    <p>{heigth}</p>
    {mydata}
    </div>;
}
