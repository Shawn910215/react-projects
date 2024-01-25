import { useState, useEffect } from "react";
const key = "c41bbee6";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  //useEffect to fetch data.
  useEffect(
    function () {
      // callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          //every time run the effect, set error to empty
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          //throw an error to handle failing to fetch data, for example disconnected problem.
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          // throw an error to handle not find movies from API.
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
          setIsLoading(false);
        } catch (err) {
          // stop aborting fetching data error
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          //to eliminate loading in the end
          setIsLoading(false);
        }
      }
      //if the length of input is less than 3, sho nothing
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      //clean up function to clean up Data Fetching.each time new re-render, this function will abort the current fetch request.
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  //what returns from this custom hook.
  return { movies, isLoading, error };
}
