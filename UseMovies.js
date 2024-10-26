import { useEffect, useState } from "react";
export function useMovies(query, callBack) {
  const key = "9676ae86";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query},`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong in fetching movies");
          const data = await res.json();
          if (data.Response === "False")
            throw new Error(`Movie: "${query}" not found`);

          setMovies(data.Search);
          setError("");
          console.log(data);
        } catch (error) {
          console.log(error);
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseSelectedMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },

    [query]
  );
  return { isLoading, error, movies };
}
