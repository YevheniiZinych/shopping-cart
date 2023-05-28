import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid black;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const Suggestions = styled.ul`
  position: absolute;
  top: 0;
  transform: translateY(39px);
  background-color: #fff;
  border: 2px solid black;
  width: 100%;
  z-index: 10;
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;

  &:hover {
    background: #efefef;
  }
`;
