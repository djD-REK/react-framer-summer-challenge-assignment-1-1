import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const bg = "linear-gradient(to top, #C06C84, #6C5B7B, #355C7D)";
  return (
    <div className="App" style={{ background: bg, padding: "150px" }}>
      <h1 style={{ color: "white" }}>Prototyping with React+Framer</h1>
      <img src="/yay.gif" />
      <h2>
        Find out the answer for this: <br />
        1245 * 37343 - 223535 / 152 = <br />
        <span style={{ background: "white" }}>
          {1245 * 37343 - 223535 / 152}
        </span>
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
