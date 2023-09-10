import "./App.css";
import { useEffect, useState } from "react";


function App() {

  const [ammy, setAmmy] = useState([])
  const [bikky, setBikky] = useState([])
  const [clat, setClat] = useState([])

  function call() {
    let q = fetch("https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=2a72ef4da815f5781303f5abe1d174f5")
    q.then((value1) => {
      return value1.json()
    }).then((value2) => {
      var [price]=value2
      document.getElementById("message-container").innerHTML =price

    })
  }

  function start() {
    var id = setInterval(call, 5000)
  }


  return (
    <div className="App">
      <div> <button className="send" onClick={start}>send</button></div>
      <div id="message-container">hi</div>
    </div>
  );
}

export default App;
