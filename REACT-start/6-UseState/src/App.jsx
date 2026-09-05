import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Generate Password
  const passwordGeneration = useCallback(() => {
    let pass = "";
    let str =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllowed) {
      str += "0123456789";
    }

    if (isCharAllowed) {
      str += "!@#$%^&*(){}[]<>?/|";
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed]);

  // Copy Password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);

    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGeneration();
  }, [passwordGeneration]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl my-8 bg-green-400 text-white px-4 py-5">

      <h1 className="text-2xl text-center mb-4 text-gray-800">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-black"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-500 px-4 text-white"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">

        {/* Length */}
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />

          <label>Length: {length}</label>
        </div>

        {/* Numbers */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="numberInput"
            checked={isNumberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />

          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Characters */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="charInput"
            checked={isCharAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />

          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
    </div>
  );
}

export default App;
