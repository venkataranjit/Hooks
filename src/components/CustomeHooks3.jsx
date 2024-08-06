import React from "react";
import useFetch from "./useFetch";

const CustomeHooks3 = () => {
  const {data : products, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
//   if (!products) return <div>Loading...</div>;
    if(error) return <div>Error: {error}</div>
    if(loading) return <div>Loading the Data...</div>
  return (
    <>
    {/* {Object.keys(products)} {Object.keys(products[0])}  */}
      <h5>CustomeHooks 3</h5>
      <ul>
        {products.map((e, i) => (
          <li>{e.title}</li>
        ))}
      </ul>
    </>
  );
};

export default CustomeHooks3;
