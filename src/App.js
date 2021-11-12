import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import { StyledButton, StyledDiv, StyledText } from "./styles/styles";
import { makePassword } from "./assets/helpers/makePassword";
function App() {
  const [digits, setDigits] = useState();
  const [password, setPassword] = useState("");
  const refPassword = useRef(null);

  return (
    <div
      style={{
        width: "500px",
        height: "300px",
      }}
    >
      <Header title="Password Generator" />
      <StyledDiv margin="20px" justifyContent="center">
        <Input
          type="number"
          min="1"
          placeholder="Password length"
          onChange={(e) => setDigits(e.target.value)}
        />
        <StyledButton onClick={() => setPassword(makePassword(digits))}>
          <StyledText color="white" fontSize="1em">
            Generate
          </StyledText>
        </StyledButton>
      </StyledDiv>
      <StyledDiv justifyContent="center">
        <Input ref={refPassword} value={password} disabled width="200px" />
        <StyledButton
          color="white"
          fontSize="1em"
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </StyledButton>
      </StyledDiv>
    </div>
  );
}

export default App;
