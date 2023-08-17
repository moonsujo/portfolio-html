import { Link } from "react-router-dom";

export default function ReturnToMain() {
  return (
    <div className="footer">
      <Link className="page-link bottom-nav" to={`/`}>
        <p className="content-block-button" style={{ marginTop: "20px" }}>
          return to main
        </p>
      </Link>
    </div>
  );
}
