import styled from "styled-components";
import theme from "./theme";
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "stretch"};
  margin: ${({ margin }) => margin || "0"};
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "40px"};
  background-color: ${({ color }) => color || theme.colors.blue};
`;
export const StyledText = styled.div`
  word-wrap: break-word;
  color: ${({ color }) => color || "black"};
  font-size: ${(props) => props.fontSize || "24px"};
`;
export const StyledButton = styled.button`
  width: ${(props) => props.width || "120px"};
  color: ${({ color }) => color || "black"};
  background-color: ${(props) => props.backgroundColor || theme.colors.blue};
  border-radius: 10px;
  border: 1px solid white;
  :hover {
    background-color: ${theme.colors.lightBlue};
  }
`;
export const StyledInput = styled.input`
  border: 1px solid grey;
  width: ${(props) => props.width || "160px"};
  color: ${({ color }) => color || "black"};
  font-size: ${(props) => props.fontSize || "24px"};
  :focus {
    outline: none;
    border: 1px solid blue;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 18px;
  }
`;
