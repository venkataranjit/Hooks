import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new error("Data not fetched");
      }
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  return {data, loading, error};
};

export default useFetch;
