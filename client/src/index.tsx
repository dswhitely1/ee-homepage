import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./providers";
import reportWebVitals from "./reportWebVitals";
import {LandingPage} from "./layouts";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
