import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";

export default function ColonPolypDetection() {
  return (
    <div id="colonoscopy-page" className="page">
      <Header />
      <div id="content-wrapper-2">
        <div className="content">
          <div className="content-block">
            <h2 className="content-block-title">AI COLON POLYP DETECTION</h2>
            <p className="content-block-description">
              <b>Role:</b> AI Scientist / Programmer
            </p>
            <p className="content-block-description">
              <b>Goal:</b> Train a convolutional neural network on colonoscopy
              footage to detect polyps.
            </p>
          </div>
          <div className="content-block">
            <img
              className="content-block-image"
              id="yolov8-results"
              src="./results-image.png"
              width="100%"
            />
          </div>
          <div className="content-block">
            <p className="content-block-description">
              <b>Hypothesis:</b> Low learning rate and batch size during
              fine-tuning will yield the highest accuracy in identifying polyps
              in the test data.
            </p>
          </div>
        </div>
        <div className="content-block">
          <p className="content-block-description">
            <b>Data:</b> Colonoscopy Polyp Detection and classification: Dataset
            Creation and Comparative Evaluations (Kaidong Li, et al.)
          </p>
          <p className="content-block-description">
            <b>Model:</b> YOLOv8x
          </p>
          <p className="content-block-description">
            <b>Experiment Setup</b>
            <ul>
              <li>Organize the dataset into train, validate, and test sets</li>
              <li>Provision a p2.xlarge EC2 instance on AWS</li>
              <li>Download the pretrained model</li>
            </ul>
          </p>
          <div className="content-block">
            <p className="content-block-description">
              <b>Design</b>
            </p>
            <ul>
              <li>two batch sizes: 8, 16</li>
              <li>
                two scheduled learning rates: 1e<sup>-4</sup> (initial) to 1e
                <sup>-6</sup> (final), and 1e<sup>-3</sup> to 1e<sup>-6</sup>
              </li>
              <li>
                run each possible combination (4 total) and compare accuracy on
                test data
              </li>
            </ul>
          </div>
          <div className="content-block">
            {" "}
            <p className="content-block-description">
              <b>Procedure</b>
              <ol>
                <li>
                  Finetune the pretrained model with each configuration and
                  data.
                </li>
                <li>Compare accuracies.</li>
              </ol>
            </p>
          </div>
          <div className="content-block">
            <p className="content-block-description">
              <b>Result:</b> finetuning with scheduled learning rate 1e
              <sup>-4</sup> to 1e<sup>-6</sup> and batch size 16 performed best.
              Accuracy improved with lower values in both hyperparameters.
            </p>
            <p className="content-block-description">
              <b>Loss and accuracy plots</b>
            </p>
            <img
              className="content-block-image"
              id="yolov8-results"
              src="./yolov8-results.png"
              width="100%"
            />
            <img
              className="content-block-image"
              id="yolov8-results"
              src="./yolov8-results-table.png"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <Link className="page-link bottom-nav" to={`/`}>
          <p className="content-block-button">return to main</p>
        </Link>
      </div>
    </div>
  );
}
