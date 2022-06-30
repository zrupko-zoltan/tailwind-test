import { useState } from "react";

function Content() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="m-auto text-3xl text-gray-50 flex flex-col">
      <button
        className="radius-xl bg-black rounded-xl m-1"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        className="radius-xl bg-black rounded-xl m-1"
        onClick={() => {
          setCounter(0);
        }}
      >
        Set to 0
      </button>
      <span>{counter} steps closer to victory!</span>
    </div>
  );
}

export default Content;
