import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator(); // Generate a default password when the app loads
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">🔐 Password Generator</h1>

        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-3 rounded bg-gray-700 text-white font-mono text-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Password Length: {length}</label>
          <input
            type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center text-white space-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-yellow-500"
            />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center text-white space-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-yellow-500"
            />
            <span>Include Symbols</span>
          </label>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
