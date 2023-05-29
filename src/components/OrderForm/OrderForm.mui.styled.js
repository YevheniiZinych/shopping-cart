import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  maxWidth: 500,
  height: 355,

  background: 'rgba(255, 255, 255, 0.29)',
  borderBottomLeftRadius: '16px',
  borderBottomRightRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(2.6px)',
  border: '1px solid rgba(255, 255, 255, 0.54)',
}));

export const OrderTextField = styled(TextField)(() => ({
  width: 300,
  marginBottom: 15,
  '& .MuiFormLabel-root ': {
    color: 'black',
  },

  '& .MuiInputBase-root': {
    height: '40px',
  },

  '& .MuiFormLabel-root': {
    top: '-7px',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff',
    borderWidth: 2,
  },
}));
