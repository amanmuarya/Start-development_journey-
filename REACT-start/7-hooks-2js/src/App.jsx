import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center gap-4 shadow-md bg-white  bottom-12 inset-x-0 px-2 py-2 rounded-2x1"
        >
          <button
            onClick={() => setColor("green")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-3 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-3 py-1 rounded-full text-red shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("red")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;