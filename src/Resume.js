import Header from "./Header";
import ReturnToMain from "./ReturnToMain";

export default function Resume() {
  return (
    <div id="resume-page" className="page">
      <Header />
      <div class="content">
        <div className="content-block">
          <h2 className="content-block-title">RESUME</h2>
          <div style={{ display: "flex" }}>
            <div id="download-resume-button">
              <div>
                <a
                  id="download-resume-button-link"
                  href="https://resume-moonsu.s3.us-west-1.amazonaws.com/moonsu-rhino-jo-apple-full-stack-spg-081523.pdf"
                  download
                >
                  <p id="download-resume-button-text">Download</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ReturnToMain /> */}
    </div>
  );
}
