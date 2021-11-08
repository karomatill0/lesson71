import styled from "styled-components";

export const Button = styled.button`
border: none;
font-size: 20px;
padding: 10px;
display: inline;
margin: 20px;
`;
export const Tea = styled.div`
 display: ${({ mode }) => (mode ? "none" : "inline")};
 background-color: rgba(0,0,0,0.5);
 position: fixed;
 right: 0px;
 bottom: 0px;
 top: 0px;
 width: 35%;
 transition-duration: 1s;
 padding: 80px;
`;