import styled from 'styled-components';

export const CartContainer = styled.div``;

export const CartItem = styled.li`
  /* display: flex;
  align-items: center;
  margin-bottom: 15px;

  min-height: 150px;

  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
  border: 1px solid rgba(255, 255, 255, 0.54); */
`;

export const ImgWrapper = styled.div`
  text-align: center;
  color: yellow;
  width: 150px;
  margin-bottom: 10px;
`;

export const BtnWrapper = styled.div`
  margin-bottom: 5px;
  & button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const RemoveBtn = styled.button`
  border: none;
  margin-top: 10px;
  transition: all 0.3s linear;

  &:hover,
  &:focus {
    background-color: red;
  }
`;
