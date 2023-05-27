import styled from 'styled-components';

export const CartItem = styled.li`
  font-size: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  height: 250px;
  width: 200px;

  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
  border: 1px solid rgba(255, 255, 255, 0.54);
`;

export const ImgWrapper = styled.div`
  text-align: center;
  color: #fff;
  width: 150px;
  margin-bottom: 10px;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 45px;
  margin-bottom: 5px;
  & button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  transition: all 0.3s linear;

  &:hover,
  &:focus {
    background-color: red;
  }
`;

export const Price = styled.p`
  position: absolute;
  bottom: 15px;

  font-size: 20px;
  color: #fff;
`;
