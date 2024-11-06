import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "./App";
import "./styles.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <div className="App">
        <App />
      </div>
    </Provider>
  </StrictMode>
);
