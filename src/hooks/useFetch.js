import {useEffect, useState} from "react";

function useFetch(url) {
    const [res , setRes] = useState({ loading: true, data: null , error: null });
    useEffect(() => {
            setRes({loading: true, data: null , error: null});

            fetch(url)
                .then(res =>
                    {
                        if(!res.ok) throw new Error(`Error fetching data : ${res.status}`);
                        return res.json();
                    }
                )
                .then( res => setRes({loading: false, data: res.data, error: null}))
                .catch( err => setRes({ loading: false, data: null, error: err }));
        }, [url]
    );


    return res;



}
export default useFetch;