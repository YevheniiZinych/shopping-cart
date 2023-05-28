import styled from 'styled-components';

export const OrderBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  width: 150px;
  height: 50px;
  margin-top: 20px;
  overflow: hidden;
  border: 2px solid #fff;
  transition: all 0.3s ease-in-out;

  &::before {
    content: ' ';
    position: absolute;
    display: block;
    height: 100px;
    width: 30px;
    background-color: rgb(246, 243, 21);
    transform: rotate(35deg);
    left: -60px;
    top: -30px;
    transition: all 0.3s ease-in-out;
  }

  & span {
    z-index: 2;
  }

  &:hover::before {
    left: 200px;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;
