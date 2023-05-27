import { useState, useEffect } from 'react';
import OrderItem from 'components/OrderItem/OrderItem';
import {
  Container,
  ShoppingContainer,
  ShoppingList,
  Wrapper,
  ShopInner,
} from './ShoppingCart.styled';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { GoogleAddress } from 'components/GoogleAddress/GoogleAddress';

const ShoppingCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrise = () => {
    let total = 0;

    cart.forEach(item => {
      total += item.amount * item.price;
    });

    setPrice(total);
  };

  const handleRemove = _id => {
    const filteredCard = cart.filter(item => item._id !== _id);
    setCart(filteredCard);
  };

  useEffect(() => {
    handlePrise();
  });

  return (
    <Container>
      <section>
        <ShoppingContainer>
          <Wrapper>
            <GoogleAddress />
            <OrderForm cart={cart} price={price} />
            <ShopInner>
              <ShoppingList>
                {cart?.map(item => {
                  return (
                    <OrderItem
                      key={item._id}
                      item={item}
                      handleRemove={handleRemove}
                      handleChange={handleChange}
                    />
                  );
                })}
              </ShoppingList>
            </ShopInner>
          </Wrapper>
        </ShoppingContainer>
      </section>
    </Container>
  );
};

export default ShoppingCart;
