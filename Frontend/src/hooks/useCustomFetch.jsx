import { useState, useEffect } from "react";
import axios from "axios";

export const useCustomFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      /* setIsPending(true); */
      try {
        const response = await axios.get(url);
        if (!response.data) throw new Error(response.status);
        setIsPending(false);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
};