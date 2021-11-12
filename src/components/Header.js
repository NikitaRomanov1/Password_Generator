import React from "react";
import { StyledHeader, StyledText } from "../styles/styles";

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledText color="white" fontSize="1.5rem">
        {title}
      </StyledText>
    </StyledHeader>
  );
};

export default Header;
