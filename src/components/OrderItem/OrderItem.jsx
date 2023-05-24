import { CartItem, CartContainer } from './OrderItem.styled';

const OrderItem = ({ item, handleRemove, handleChange }) => {
  const { id, img, name, price, amount } = item;
  return (
    <CartContainer>
      <CartItem>
        <div>
          <img src={img} alt={name} loading="lazy" width={150} />
          <p>{name}</p>
        </div>
        <div>
          <button onClick={() => handleChange(item, +1)} type="button">
            +
          </button>
          <button type="button">{amount}</button>
          <button onClick={() => handleChange(item, -1)} type="button">
            -
          </button>
        </div>
        <div>
          <p>Price: {price}</p>
          <button onClick={() => handleRemove(id)} type="button">
            Remove
          </button>
        </div>
      </CartItem>
    </CartContainer>
  );
};
export default OrderItem;
