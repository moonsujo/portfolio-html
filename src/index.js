import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PredictiveMaintenanceDashboard from "./PredictiveMaintenanceDashboard";
import ColonPolypDetection from "./ColonPolypDetection";
import YutGame3D from "./YutGame3D";
import About from "./About";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Contact";
import Resume from "./Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <PredictiveMaintenanceDashboard />,
  },
  {
    path: "/colonoscopy",
    element: <ColonPolypDetection />,
  },
  {
    path: "/yutgame",
    element: <YutGame3D />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
