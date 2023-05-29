import { useEffect } from 'react';

import { Burger } from './BurgerMenu.styled';

export const BurgerMenu = ({ setOpen, open }) => {
  useEffect(() => {}, []);

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
    </>
  );
};
