import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // [state, setState] = useState(initialValue)

  const [advice, setAdvice] = useState("Advices show hongi");
  const [darkThemeHandler, setDarkThemeHandler] = useState(false);
  const [counter, setCounter] = useState(0);

  async function adviceLaao() {
    // //api call karwaounga
    const data = await fetch("https://api.adviceSlip.com/advice");

    // //api json
    const {
      slip: { advice: adviceFromApi },
    } = await data.json();

    // //api response ko ek state main store karungaٓ
    setAdvice(adviceFromApi);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setDarkThemeHandler(!darkThemeHandler);
  }

  useEffect(() => {
    //jesay hi component load hoga wesay hi useEffect chaleyga
    console.log("explore kar raha hun useEffect k ander");
    adviceLaao();
  }, []);
  
  return (
    <div className= "containerFluied" style={{
      backgroundImage: 'url("/assets/bg3.jpeg")',

      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "600px",
      position: "relative",
      marginTop: "50px",
      overflow: "hidden",

    }}>
    <div
      style={{
        backgroundColor: darkThemeHandler ? "black" : "white",
        color: darkThemeHandler ? "white" : "black",
        justifyContent: "center",
        textAlign: "center",
        height: "50%",
        position: "absolute",
        top: "50px",
        left: "0",
        right: "0",
        margin: "0 auto",
        width: "80%",
        
      }}
    className="container">
      <h1>{advice} </h1>
      <br/>
      <button onClick={adviceLaao}>Click and get advices</button>
      <br/><br/><br/>
      <p>I have read {counter} pieces of advice so far; here's to finding the one that makes all the difference!</p>
    </div>
    </div>
  ); //JSX
}

export default App;