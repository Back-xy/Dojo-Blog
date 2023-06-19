import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) throw Error('Something went wrong!');
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setError(err.message);
          }
        })
        .finally(() => {
          setIsPending(false);
        });
    }, 500);
    // abort the fetch
    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
