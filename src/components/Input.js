import React from "react";
import { StyledInput } from "../styles/styles";

const Input = React.forwardRef((props, ref) => (
  <StyledInput ref={ref} {...props}></StyledInput>
));

export default Input;
