import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: 400,
  height: 400,

  background: 'rgba(255, 255, 255, 0.29)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(2.6px)',
  border: '1px solid rgba(255, 255, 255, 0.54)',
}));

export const OrderTextField = styled(TextField)(() => ({
  width: 300,
  color: '#fff',

  background: 'transparent',

  '& .MuiFormLabel-root ': {
    color: '#fff',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff',
  },

  '& .MuiInputBase-root': {
    height: '40px',
  },

  '& .MuiFormLabel-root': {
    top: '-7px',
  },

  '& .MuiInputBase-formControl': {
    color: '#fff',
  },

  marginBottom: 15,
}));
