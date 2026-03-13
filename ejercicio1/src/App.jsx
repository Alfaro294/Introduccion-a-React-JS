import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Boton from "./components/Botones";

function App() {
  return (
    <>
      <div>
        <Boton texto={"Click"} clicHere={() => alert("Funciono")} />

        <Boton texto={"Click"} clicHere={() => alert("Funciono")} />
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;
