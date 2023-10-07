import AlertAdvanced from "./components/AlertAdvaced";
import React from "react";
function App() {
  const jsxMarkUp = (
    <div>
      <b> bold: Hello world jsx</b>
      <br />
      <i> italic: Hello world jsx</i>
      <br />
      <span> normal Hello world jsx</span>
    </div>
  );

  let reactNode = React.createElement(
    "h1",
    { style: { color: "red" } },
    "Master React typescript features one step at a time"
  );
  return (
    <div>
      <AlertAdvanced children={jsxMarkUp}></AlertAdvanced>
      <AlertAdvanced children={reactNode}></AlertAdvanced>
    </div>
  );
}

export default App;
