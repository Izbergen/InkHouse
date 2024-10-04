// useFetch.js
import { useEffect, useState } from "react";

function useFetch(url) {
    const [res, setRes] = useState({ loading: true, data: null, error: null });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setRes({ loading: true, data: null, error: null });
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const result = await response.json();
                setRes({ loading: false, data: result.data, error: null });
            } catch (error) {
                setRes({ loading: false, data: null, error });
            }
        };

        fetchData();
    }, [url]);

    return res;
}

export default useFetch;
