import React, { useState, useEffect } from 'react';
import MessageCard from './components/MessageCard';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then(res => res.json())
      .then(details => {
        var date;
        for(let i = 0; i < details.length; i++) {
          date = Date.parse(details[i]._created)
          details[i]._created = new Date(date).toString().split("G")[0]
        }
        setData(details)
      })
  }, []);

  const handleName = event => {
    setName(event.target.value);
    let time = new Date().getTime();
    let date = new Date(time);
    setTime(date.toString().split("G")[0]);
  }

  const handleMessage = event => {
    setMessage(event.target.value);
    let time = new Date().getTime();
    let date = new Date(time);
    setTime(date.toString().split("G")[0]);
  }

  const handleSubmit = () => {
    if(name && message) {
      let payload = {
        name: name,
        message: message
      }
      fetch("http://localhost:5000/api/message", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
          });
      window.location.href = "/";
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='left'>
            <h4>Please leave a message!</h4>

            <input placeholder='Name' onChange={handleName} maxLength="50" id="textfield1"></input>
            <input placeholder='Message (140 char max)' onChange={handleMessage} maxLength="140" id="textfield2"></input>
            <button onClick={handleSubmit}>Submit</button>
            
          </div>
          <div className='right'>
          {name || message
            ? <MessageCard
            username={name}
            message={message}
            created={time}
            />
            : ""}

            {data.map((data, index) => {
              return (
                
                  <div key={index}>
                    <MessageCard
                      key={`${index}card`}
                      username={data.username}
                      message={data.message}
                      created={data._created}
                    />
                  </div>
                
              )
            })}


          
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;