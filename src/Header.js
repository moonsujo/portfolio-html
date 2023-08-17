import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div id="header-bar">
        <div id="header-title">
          <Link class="page-link" to={"/"}>
            <img
              id="header-title-img"
              width="60px"
              height="50px"
              src="./blue-moon.png"
            />
          </Link>
        </div>
        <div id="header-nav">
          <div id="header-nav-list">
            <div class="header-nav-item">
              {" "}
              <Link class="page-link" to={`/`}>
                <div className="header-nav-item-text">Home</div>
              </Link>
            </div>
            <div class="header-nav-item">
              {" "}
              <Link class="page-link" to={`/about`}>
                <div className="header-nav-item-text">About</div>
              </Link>
            </div>
            <div class="header-nav-item">
              {" "}
              <Link class="page-link" to={`/contact`}>
                <div className="header-nav-item-text">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
