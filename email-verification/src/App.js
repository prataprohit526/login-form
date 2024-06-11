import './App.css';
import { useState } from 'react';

const myJSON = [
  {
    "title": "Presentation Design",
    "img": "/img/1.png",
    "desc": "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
  },
  {
    "title": "Audio - Visual Production",
    "img": "/img/2.png",
    "desc": "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
  },
  {
    "title": "Translation Services",
    "img": "/img/3.png",
    "desc": "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
  },
  {
    "title": "Graphic Design",
    "img": "/img/4.png",
    "desc": "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
  },
  {
    "title": "Research & Analytics",
    "img": "/img/5.png",
    "desc": "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
  },
  {
    "title": "Data Processing",
    "img": "/img/6.png",
    "desc": "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
  }
];

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' or 'success'
  const [displayMessage, setDisplayMessage] = useState(false);

  const submitForm = async () => {
    if (!email) {
      setMessage('Email is required');
      setMessageType('error');
      setDisplayMessage(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Invalid email format');
      setMessageType('error');
      setDisplayMessage(true);
      return;
    }

    try {
      const response = await fetch('http://34.225.132.160:8002/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setMessage('form submitted');
      setMessageType('success');
      setDisplayMessage(true);
      setEmail(''); // Clear the input field
    } 
    catch (error) {
      setMessage('Incorrect Email');
      setMessageType('error');
      setDisplayMessage(true);
    }
  };

  const handleFocus = () => {
    if (displayMessage) {
      setMessage('');
      setMessageType('');
      setDisplayMessage(false);
    }
  };

  return (
    <div className="App">
      <div className="Logo-Sec">
        <img className="logo_img" src="/img/logo.png" alt="Logo" />
        <div className="Logo-Text">
          Suite Of Business Support Services
        </div>
        <div className="Logo-Desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </div>
        <div className="form_container">
          <input
            type="text"
            className={messageType}
            onChange={(e) => setEmail(e.target.value)}
            value={displayMessage ? message : email}
            onFocus={handleFocus}
            placeholder="Enter your email"
          />
          <button onClick={submitForm}>Contact Me</button>
        </div>
      </div>

      <div className="area_one">
        {myJSON.map((item, index) => (
          <div key={index} className="item_card_container">
            <div className="item_card_top">
              <img src={item.img} alt={item.title} />
              <h2 className='title_info'>{item.title}</h2>
            </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="form_container_mobile">
        <input
          type="text"
          className={messageType}
          onChange={(e) => setEmail(e.target.value)}
          value={displayMessage ? message : email}
          onFocus={handleFocus}
          placeholder="Enter your email"
        />
        <button onClick={submitForm}>Contact Me</button>
      </div>
    </div>
  );
}

export default App;