import "./App.css";
import headerImage from "./images/bg-pattern-card.svg";
import victor from "./images/image-victor.jpg";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="headerImage">
            <img src={headerImage} alt="headerImage"></img>
          </div>
          <div className="profileContent">
            <img src={victor} alt="victor" />
            <div className="content">
              <div>
                <span className="name">Victor Crest</span>
                <span className="age">26</span>
              </div>
              <p className="city">London</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            80K
            <br />
            Followers
          </div>
          <div className="col-4">
            803K <br />
            Likes
          </div>
          <div className="col-4">
            1.4K
            <br />
            Photos
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
