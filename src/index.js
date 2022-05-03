import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App
      dialogsData={state.dialogs}
      messagesData={state.messages}
      postsData={state.posts}
    />
  </React.StrictMode>
);

reportWebVitals();
