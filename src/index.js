import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./assets/styles/index.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Roadmap from "./routes/Roadmap";
import Faq from "./routes/Faq";
import Team from "./routes/Team";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="faq" element={<Faq />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
