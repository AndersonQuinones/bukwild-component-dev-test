import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

test("Smoke test to check that App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
