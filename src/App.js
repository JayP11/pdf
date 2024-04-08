import logo from "./logo.svg";
import "./App.css";
import pdf from "../src/assets/0.pdf";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a href={pdf} target="_blank" download>
          Download Pdf
        </a>
      </header>
    </div>
  );
}

export default App;
