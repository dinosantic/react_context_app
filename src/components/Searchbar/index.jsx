import { useState } from "react";
import { useHistory } from "react-router-dom";
//style
import "./Searchbar.css";

const Searchbar = () => {
  const [term, setTerm] = useState();
  //
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
