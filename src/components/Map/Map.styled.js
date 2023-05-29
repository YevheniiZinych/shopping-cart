import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const MapBtn = styled.button`
  height: 40px;
  width: 60px;
  margin-left: 20px;
  @media (max-width: 769px) {
    width: 60px;
  }
`;

export const MapBtnWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;

  right: 0;
`;
