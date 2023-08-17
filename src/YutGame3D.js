import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ReturnToMain from "./ReturnToMain";
import { useState } from "react";
// import { Spinner } from "react-spinkit";

export default function YutGame3D() {
  const [loading, setLoading] = useState(true);

  function setLoadingFalse() {
    setLoading(false);
  }
  return (
    <div id="yutgame-page" className="page">
      <Header />
      <h2 className="content-block-title">YUT GAME 3D</h2>
      <p className="content-block-description" style={{ margin: "10px" }}>
        Mouse controls are enabled. Spacebar to throw the dice.
      </p>
      {loading && (
        <div
          id="spinner"
          style={{ left: "200px", top: "100px", color: "white" }}
        >
          <p>loading...</p>
        </div>
      )}
      <iframe
        className="yut-game"
        src="https://yut-game-moonsoojo.vercel.app/"
        width="100%"
        height="550px"
        style={{ border: "none", borderRadius: "20px", marginTop: "25px" }}
        onLoad={setLoadingFalse}
      />
      <p className="content-block-description" style={{ margin: "10px" }}>
        Visit <b>yutgame3d.com</b> to play in full view.
      </p>
      <p className="content-block-description" style={{ margin: "10px" }}>
        <b>Future plans:</b> Online multiplayer, explain rules with Chat GPT
      </p>
      <ReturnToMain />
    </div>
  );
}
