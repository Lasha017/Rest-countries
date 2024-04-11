import { useEffect, useState } from "react";

const useFetch = (api_url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch(api_url);
        const result = await response.json();
        const sortedData = result.sort((a: { name: { common: string } }, b: { name: { common: string } }) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setData(sortedData);
      } catch (error) {
        setIsError(new Error("Data is not available!"));
        setData(null); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [api_url]);

  return { data, isLoading , isError};
};

export default useFetch;
