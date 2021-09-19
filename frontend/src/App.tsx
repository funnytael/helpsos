import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./components/Swap";

function App() {
  return (
    <div className="App">
        <Symfoni autoInit={true}>
          <div className="min-h-screen bg-green-500">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
              <div className="text-gray-100 text-6xl pt-20 pb-10">
                Heaven Swap
              </div>
              <Swap tokenA="0x712E68EC7882b6A1403df67B0a081D60dA5C2Aaa" tokenB="0xFb28Bf0aFE539297FB595ce3CF3769F08f4d0984"></Swap>
            </div>
          </div>
        </Symfoni>
    </div>
  );
}

export default App;