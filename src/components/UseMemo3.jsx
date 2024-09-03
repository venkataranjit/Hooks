import React, { useEffect, useMemo, useState } from "react";

const UseMemo3 = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(new Date().toLocaleString());
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    setCount(count + 1);
    if (running) {
      interval = setInterval(() => {
        setTimer(new Date().toLocaleString());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);
  const stopHandler = () => {
    setRunning(false);
  };

  const startHandler = () => {
    setRunning(true);
  };
  const p = [
    { name: "IPhone", modal: 2024 },
    { name: "Xiaomi", modal: 2023 },
    { name: "redmi", modal: 2022 },
  ];

  const [products, setProducts] = useState(p);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    console.log("filtered");
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.modal.toString().includes(search.toLowerCase())
    );
  }, [products, search]);

  // const filteredProducts = filterProducts(products, search); // without usememo
  // console.log('filtered')
  // function filterProducts(products, searchKey) {
  //   console.log(count);
  //   return products.filter(
  //     (p) =>
  //       p.name.toLowerCase().includes(searchKey) ||
  //       p.modal.toString().includes(searchKey)
  //   );
  // }
  return (
    <div>
      <h5>Timer</h5>
      <div>
        {timer}
        <button onClick={stopHandler}>Stop</button>
        <button onClick={startHandler}>start</button>
      </div>
      <hr />
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Modal</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.modal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseMemo3;
