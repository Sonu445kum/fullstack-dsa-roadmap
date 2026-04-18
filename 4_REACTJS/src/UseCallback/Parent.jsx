import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Handle Clicked..!!");
  });

// functions updated only id changes..!!
  const fetchData = useCallback(async () => {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    setData(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = useCallback((query) => {
  setSearch(query);
}, []);

  return (
    <div style={{ margin: "20px" }}>
      <h1>CountValue:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrment</button>
      <Child onClick={handleClick} />
    </div>
  );
};
export default Parent;

const Child = React.memo(({ onClick }) => {
  console.log("Child render..!!");
  <button onClick={onClick}>Click</button>;
});
