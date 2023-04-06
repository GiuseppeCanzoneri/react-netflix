import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Gallery from "./Components/Gallery";
import MyFooter from "./Components/MyFooter";
import Gallery2 from "./Components/Gallery2";
import Gallery3 from "./Components/Gallery3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShow from "./Components/TvShow";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Gallery />
        <Gallery2 />
        <Gallery3 />
        <Routes>
          <Route path="tvshow" element={<TvShow />} />
          <Route path="/MovieDetails/:imdbID" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
