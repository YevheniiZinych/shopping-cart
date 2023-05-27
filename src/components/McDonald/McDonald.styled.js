import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 30%;
  width: 70%;
`;

export const ProductList = styled.ul`
  display: flex;
  justify-content: start;

  flex-wrap: wrap;
  gap: 20px;
  width: calc((100% - 10px) / 1);

  & li {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    text-align: center;

    height: 250px;
    width: 200px;

    background: rgba(255, 255, 255, 0.29);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.6px);
    -webkit-backdrop-filter: blur(2.6px);
    border: 1px solid rgba(255, 255, 255, 0.54);
  }

  & li > button {
    position: absolute;
    bottom: 3px;
    border: 2px solid #d6d618;
    border-radius: 3rem;
    color: #d6d618;
    font-size: 15px;
    font-weight: 100;
    overflow: hidden;
    padding: 0.5em;
    margin-top: 10px;
    /* position: relative; */
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
  }

  & li > button::after {
    background-color: yellow;
    border-radius: 3rem;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: -1;
  }

  & li > button:hover::after {
    transform: translate(0, 0);
  }

  & li > button:hover {
    border: 2px solid transparent;
    color: indigo;
    transform: scale(1.05);
    will-change: transform;
  }
`;
