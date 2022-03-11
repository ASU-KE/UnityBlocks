// @ts-check

import { useState, useEffect } from "react";

/**
 * @template S
 * @typedef {[FetchResponse<S>, FetchCallback]} UseFetchTuple
 */

/**
 * @template E
 * @typedef {{
 *    data: E
 *    loading: boolean
 *    error: object
 * }} FetchResponse
 */

/**
 *  @typedef {(url: string) => void} FetchCallback
 */

/**
 * @template T
 * @returns {[FetchResponse<T>, FetchCallback]}
 */
const useFetchDrupalFeed = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!url) return;
    const fetchData = () => {
      setError(null);
      setLoading(true);
      try {
        fetch(url)
          .then(res => res.json())
          .then(result => {
            setData(result);
            setLoading(false);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return [{ data, loading, error }, setUrl];
};

export { useFetchDrupalFeed };
