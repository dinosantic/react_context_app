import React from "react";
import { useLocation } from "react-router-dom";
//custom hook
import { useFetch } from "../../hooks/useFetch";
//components
import RecipeList from "../../components/RecipeList";
//style
import "./Search.css";

export const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  //
  const url = "http://localhost:3000/recipes?q=" + query;
  //
  const { isPending, data, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error} </p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
