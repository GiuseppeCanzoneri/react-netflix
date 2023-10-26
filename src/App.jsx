import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShow from "./Components/TvShow";
import MovieDetails from "./Components/MovieDetails";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="tvshow" element={<TvShow />} />
          <Route path="/MovieDetails/:imdbID" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
