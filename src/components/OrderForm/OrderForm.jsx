import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { StyledBox, OrderTextField } from './OrderForm.mui.styled';
import { addOrder } from 'apiService/apiService';
import { OrderBtn } from './OrderForm.styled';

const LOCALSTORAGE_KEY = 'user-order-cred';

export const OrderForm = ({ cart, price: totalPrice, place, setCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

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

  useEffect(() => {
    setAddress(place);
  }, [place]);

  const formReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCart([]);
  };

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

    if (name && email && phone && address && cart.length !== 0) {
      addOrder(order);
      formReset();
      localStorage.removeItem(LOCALSTORAGE_KEY);
      toast.success('Your order was sent');
    } else {
      toast.error('Complete oll field for send order and add food to order');
    }
  };

  useEffect(() => {
    if (name || email || phone || address) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(order.data));
    }
  }, [address, email, name, order.data, phone]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (items) {
      const { name, email, phone, address } = items;
      setName(name);
      setEmail(email);
      setPhone(phone);
      setAddress(address);
    }
  }, []);

  return (
    <div>
      <StyledBox
        onSubmit={handleOrder}
        component="form"
        noValidate
        autoComplete="off"
      >
        <OrderTextField
          required
          name="address"
          type="text"
          value={address}
          onChange={handleChange}
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <OrderTextField
          required
          id="outlined-basic"
          label="Name"
          value={name}
          variant="outlined"
          name="name"
          type="text"
          onChange={handleChange}
        />
        <OrderTextField
          required
          id="outlined-basic"
          label="Email"
          value={email}
          variant="outlined"
          name="email"
          type="text"
          onChange={handleChange}
        />
        <OrderTextField
          required
          id="outlined-basic"
          label="Phone"
          value={phone}
          variant="outlined"
          name="phone"
          type="number"
          onChange={handleChange}
        />
        <span>Total prise: {totalPrice} uah</span>
        <OrderBtn type="submit">
          <span>Make order</span>
        </OrderBtn>
      </StyledBox>
    </div>
  );
};
