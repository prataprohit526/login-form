import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("http://34.225.132.160:8002/api")
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

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
            <h2>Suite of Business Support Services</h2>
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
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleButtonClick}>Click me</button>
        {emailError && <h2 style={{ color: "red" }}>{emailError}</h2>}
      </div>
    </div>
  );
}

export default App;
