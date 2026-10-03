import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <header className="site-header">
        <h1>Dynamic Image Gallery</h1>
        <p>A collection of images rendered dynamically from a data array.</p>
      </header>
      <main>
        <Gallery />
      </main>
      <footer className="site-footer">
        <p>Built with React.</p>
      </footer>
    </>
  );
}

export default App;
