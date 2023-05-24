import { useState, useEffect } from 'react';
import OrderItem from 'components/OrderItem/OrderItem';
import { Container } from './ShoppingCart.styled';

const ShoppingCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrise = () => {
    let total = 0;

    cart.forEach(item => {
      total += item.amount * item.price;
    });

    setPrice(total);
  };

  const handleRemove = id => {
    const filteredCard = cart.filter(item => item.id !== id);
    setCart(filteredCard);
  };

  useEffect(() => {
    handlePrise();
  });

  return (
    <Container>
      <section>
        <ul>
          {cart?.map(item => {
            return (
              <OrderItem
                key={item.id}
                item={item}
                handleRemove={handleRemove}
                handleChange={handleChange}
              />
            );
          })}
        </ul>

        <span>Total prise: {price}</span>
      </section>
    </Container>
  );
};

export default ShoppingCart;
