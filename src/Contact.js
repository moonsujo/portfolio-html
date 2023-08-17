import "./App.css";
import Header from "./Header";
import ReturnToMain from "./ReturnToMain";

export default function Contact() {
  return (
    <div id="contact-page" className="page">
      <Header />
      <div id="content-wrapper-2">
        <div className="content">
          <div className="content-block">
            <h2 className="content-block-title">CONTACT</h2>
            <p className="content-block-description">
              Let's collaborate! My email is moonsooj@usc.edu.
            </p>
            <div className="content-block">
              <img
                className="content-block-image"
                id="yolov8-results"
                src="./blue-moon-rhino.png"
                width="400px"
              />
            </div>
          </div>
        </div>
        {/* <ReturnToMain /> */}
      </div>
    </div>
  );
}
