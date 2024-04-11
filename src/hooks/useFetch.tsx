import { useEffect, useState } from "react";

const useFetch = (api_url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api_url);
        const result =  await response.json();
        const sortedData = result.sort((a: { name: { common: string; }; }, b: { name: { common: string; }; }):any => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setData(sortedData);
      } catch (error) {
        if (error) {
          throw new Error("Data unavailable!");
        }
      }
    };
    fetchData();
  }, [api_url]);
  return (
    {data}
  )
};

export default useFetch;