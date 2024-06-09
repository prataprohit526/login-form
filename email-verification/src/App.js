import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="App-data">
        <div className="about">
          <div className="image-div">
            <img
              src="https://www.ez.works/_next/image?url=https%3A%2F%2Fdxw9jueyijhmn.cloudfront.net%2Fez_website%2Ffrontend_img%2FCommonImages%2Fheaderlogo.webp&w=64&q=75"
              alt="invalid path"
            />
            <h1>Work</h1>
          </div>
          <div className="content">
            <h2>Suite of Business Support Services </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              laoreet nisi at elit venenatis fringilla. Cras ut semper quam,
              sit.
            </p>
          </div>
        </div>
        <div className="feature">
          <div>
            <p>Presentation Design</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div>
            <p>Audio-Visual Production</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div>
            <p>Translation Services</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div>
            <p>Graphic Design</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div>
            <p>Research & Analytics</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
          <div>
            <p>Data Processing</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
        </div>
      </div>
      <div className="input-feild">
        <input type="email" placeholder="Enter email" />

        <button>Click me </button>
      </div>
    </div>
  );
}

export default App;
