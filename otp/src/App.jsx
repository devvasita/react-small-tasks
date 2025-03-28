import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const OTP_CHAR_LENGTH = 5;

  const [inputArr, setInputArr] = useState(new Array(OTP_CHAR_LENGTH).fill(""));

  const refValue = useRef([]);

  useEffect(() => {
    refValue.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArray = [...inputArr];
    newArray[index] = newValue.slice(-1);
    setInputArr(newArray);

    if (newValue && refValue.current[index + 1]) {
      refValue.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      !e.target.value &&
      e.key === "Backspace" &&
      refValue.current[index - 1]
    ) {
      refValue.current[index - 1].focus();
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Validate OTP</h1>
      <div className="otp-container">
        {inputArr.map((input, index) => (
          <input
            key={index}
            className="otp-input"
            value={input}
            ref={(el) => (refValue.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
