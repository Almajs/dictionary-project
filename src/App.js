import SheCodes from "./SheCodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={SheCodes} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was built by Alma Zamir and is{" "}
            <a
              href="https://github.com/Almajs/dictionary-project"
              target="blank"
            >
              <em>open-sourced on GitHub</em>
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://main--incredible-pastelito-7caf01.netlify.app/"
              target="blank"
            >
              <em>Netlify</em>
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
