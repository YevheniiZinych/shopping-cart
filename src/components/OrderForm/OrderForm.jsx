import { useState } from 'react';
import { StyledBox, OrderTextField } from './OrderForm.mui.styled';
import { OrderContainer } from './OrderForm.styled';

export const OrderForm = ({ cart, price }) => {
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

  const handleOrder = e => {
    e.preventDefault();

    const order = {
      cart,
      price,
      data: {
        name,
        email,
        phone,
        address,
      },
    };

    console.log(order);
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
        <span>Total prise: {price}</span>
      </StyledBox>
    </OrderContainer>
  );
};
