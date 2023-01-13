import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import FluidContext from "./context/FluidContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <FluidContext>
      <App />
    </FluidContext>
  </Router>
);
