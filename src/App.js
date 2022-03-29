import { BrowserRouter, Switch, Route } from "react-router-dom";
//pages
import { Create, Home, Recipe, Search } from "./pages";
//components
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
