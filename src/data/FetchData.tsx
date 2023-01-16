import React, { useState, useEffect } from "react";
import "./fetchData.scss";

interface Props {
  url: string;
  message: string;
}

const FetchData: React.FC<Props> = ({ url, message }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, message]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {data.map((item: any) => (
        <div className="list-item" key={item.id}>
          <p className="list-item__title">{item.title}</p>
          <p className="list-item__description">{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default FetchData;
