import { Link } from "react-router-dom";
import Header from "./Header";
import ReturnToMain from "./ReturnToMain";

export default function About() {
  return (
    <div id="about-page" className="page">
      <Header />
      <div id="content-wrapper-2">
        <div class="content" style={{ display: "flex" }}>
          <div class="content-block" style={{ width: "50%" }}>
            <h2 class="content-block-title">ABOUT</h2>
            <p class="content-block-description">
              Hi! My name is Moonsu Rhino Jo. I am working as a software
              engineer in the Chatbot team at the American Automobile
              Association (AAA). I earned my Master of Science in Computer
              Science at University of Southern California in May, 2023. I
              learned about programming during my cognitive science studies at
              University of California, Los Angeles as an undergrad.
            </p>
            <p>
              I enjoy listening to music, beatboxing, and designing games. My
              social media handle is @beatrhino.
            </p>
            <div className="footer">
              <ReturnToMain />
            </div>
          </div>
          <div class="content-block" style={{ width: "50%" }}>
            <img
              src="./portrait-portrait.jpg"
              width="60%"
              style={{ margin: "20%", marginTop: "25%", marginBottom: "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
