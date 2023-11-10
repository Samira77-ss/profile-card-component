import "./App.css";
import headerImage from "./images/bg-pattern-card.svg";
import victor from "./images/image-victor.jpg";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="headerBackground">
            <img
              src={headerImage}
              className="headerImage"
              alt="headerImage"
            ></img>
          </div>
          <div className="profileContent">
            <img src={victor} alt="victor" className="profileImage" />
            <div className="content">
              <div className="info">
                <span className="name">Victor Crest</span>
                <span className="age">26</span>
              </div>
              <p className="city">London</p>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-4">
              <span className="number">80K</span>
              <span className="string">Followers</span>
            </div>
            <div className="col-4">
              <span className="number">803K</span>
              <span className="string">Likes</span>
            </div>
            <div className="col-4">
              <span className="number">1.4K</span>
              <span className="string">Photos</span>
            </div>
          </div>
        </div>
        <footer>
          This page was coded by Samira Seyfi
          <a
            href="https://github.com/Samira77-ss/profile-card-component"
            target="_blank"
            alt="GithHub Profile"
            rel="noreferrer"
          >
            open-source-code on GitHub
          </a>
          , and hosted on
          <a
            href="https://luminous-cucurucho-8d07c7.netlify.app"
            alt="Netlify link"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
