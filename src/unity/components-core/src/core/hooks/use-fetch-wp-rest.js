// @ts-check

import { useState, useEffect } from "react";

/**
 * @template S
 * @typedef {{
 *    payload: WpFetchPayload
 *    loading: boolean
 *    error: object
 * }} FetchResponse
 */

/**
 *  @typedef {Object} WpFetchPayload
 *  @property {number} [totalPages]
 *  @property {Object} [data]
 */

/**
 * @template T
 * @returns {FetchResponse<T>}
 */
const useFetchWpRest = (url, filters, pagination) => {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { categories } = filters;
  const { page, perPage, order, orderBy } = pagination;

  useEffect(() => {
    if (!url) return;

    let query = "posts?";

    if (categories.length) {
      query = `${query}categories=${categories.shift()}`;
    }

    if (categories.length) {
      query = categories.reduce(
        (accumulator, currentValue) =>
          `${accumulator}&categories=${currentValue}`,
        query
      );
    }

    query += `&per_page=${perPage}`;
    query += `&page=${page}`;
    query += `&order=${order}`;
    query += `&orderby=${orderBy}`;

    const fetchData = async () => {
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(url + query);
        const data = await response.json();

        setPayload({
          totalPages: parseInt(response.headers.get("x-wp-totalpages"), 10),
          data,
        });
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url, filters, pagination]);

  return { payload, loading, error };
};

export { useFetchWpRest };
