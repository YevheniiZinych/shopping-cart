import { useState } from 'react';
import { StyledBox, OrderTextField } from './OrderForm.mui.styled';
import { OrderContainer } from './OrderForm.styled';
import { addOrder } from 'apiService/apiService';

export const OrderForm = ({ cart, price: totalPrice }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'phone':
        return setPhone(value);
      case 'address':
        return setAddress(value);
      default:
        return;
    }
  };

  const handleOrder = async e => {
    e.preventDefault();

    const order = {
      cart: {
        id: cart._id,
        name: cart.name,
        price: cart.price,
        amount: cart.amount,
      },
      data: {
        name,
        email,
        phone,
        address,
      },
      totalPrice,
    };

    addOrder(order);
  };

  return (
    <OrderContainer>
      <StyledBox
        onSubmit={handleOrder}
        component="form"
        noValidate
        autoComplete="off"
      >
        <OrderTextField
          name="address"
          type="text"
          onChange={handleChange}
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <OrderTextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          onChange={handleChange}
        />
        <OrderTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="text"
          onChange={handleChange}
        />
        <OrderTextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          name="phone"
          type="number"
          onChange={handleChange}
        />
        <button type="submit">Make order</button>
        <span>Total prise: {totalPrice}</span>
      </StyledBox>
    </OrderContainer>
  );
};
