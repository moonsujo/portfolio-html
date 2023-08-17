import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Header from "./Header";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="main-page" className="page">
      <Header />
      <div class="content">
        <div class="content-block">
          <h2 class="content-block-title">PORTFOLIO</h2>
          <div class="button-container">
            <Link class="page-link" to={`/dashboard`}>
              <p class="content-block-button">Drone AI App</p>
            </Link>
            <Link class="page-link" to={`/colonoscopy`}>
              <p class="content-block-button">Polyp Detector</p>
            </Link>
            <Link class="page-link" to={`/yutgame`}>
              <p class="content-block-button">Yut Game 3D</p>
            </Link>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-block">
          <p class="content-block-paragraph" id="job-title">
            Software Engineer (Chatbot) at American Automobile Association
          </p>
          <div style={{ display: "flex" }}>
            <img
              class="content-block-image"
              id="portrait-landscape"
              src="./portrait-landscape.jpg"
              width="350px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
