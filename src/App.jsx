import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Gallery from "./Components/Gallery";
import MyFooter from "./Components/MyFooter";
import Gallery2 from "./Components/Gallery2";
import Gallery3 from "./Components/Gallery3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <MyNav />
        </nav>
      </header>
      <main>
        <Gallery />
        <Gallery2 />
        <Gallery3 />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
