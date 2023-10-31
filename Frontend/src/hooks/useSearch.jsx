import { useState, useEffect } from "react";

export const useSearch = (url, query) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            /* setIsPending(true); */
            function fixText(string) {
                const accent = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
                return string.split('').map(letra => accent[letra] || letra).join('').toString();
            }
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                const result = await json.filter(product => fixText(product.name.toLowerCase()).includes(query.toLowerCase()));
                console.log(result)
                setIsPending(false);
                setData(result);
                setError(null);
            } catch (error) {
                setError(`${error} Could not Fetch Data `);
                setIsPending(false);
            }
        };
        fetchData();
    }, [url, query]);
    return { data, isPending, error };
};